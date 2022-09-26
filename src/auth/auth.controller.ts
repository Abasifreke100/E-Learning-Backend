import {  BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, response } from 'express';
import { MailerService } from '@nestjs-modules/mailer';
import { url } from 'inspector';

@Controller('api')
export class AuthController {
    

    constructor(private readonly signUpServices: AuthService, private jwtService: JwtService,
    private mailerService: MailerService

        ){}

    //Signup a new user
    @Post('signup')
    async signUp(
        @Body('name')name: string,
        @Body('email')email: string,
        @Body('password')password: string,
       
    ){
        // hashing the password
        const hashPassword = await bcrypt.hash(password, 3); 

        // const token = Math.random().toString(20).substr(2, 20)

  await this.signUpServices.signup({
            name,
            email,
            password:hashPassword,
           
        });

        const url = `http://localhost:2000/confirm_mail/${hashPassword}`;
        await this.mailerService.sendMail({
            from:"akpanmbietidughe@gmail.com",
            to: email,
            subject: 'Login Confirmation mail!',
            html: ` <a href="${url}"></a> `
        })

        

        return {
            msg: 'Check your email'
        }

        
    }

    // Login a registered user
    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,

        // Using RESPONSE to Store the JWT in a cookie which is HTTP only.
        // setting {passthrough: true} for the frontend to consume.
        @Res({passthrough: true}) response:Response
    ){
        const loginUser = await this.signUpServices.findOne({email})

        
        // checking if there's any Loginuser
        if(!loginUser){
            throw new BadRequestException('No credentials');
        }
        
        // comparing the bcrypt password
        if(!await bcrypt.compare(password, loginUser.password)){
            throw new BadRequestException('No credentials');
        }
            //WHEN  RETURNING USER DETAILS WIHTOUT JWT TOKEN
        // return loginUser;

        // sign in the JWT token here
        const jwt = await this.jwtService.signAsync({id: loginUser.id}); //sending only the ID of the loginUser on JWT

        
        // this mean that the frontent won't be able to access the JWT, only the Backend alone to access the JWT
        response.cookie('jwt', jwt, {httpOnly:true});

        return{
            message: 'successfully login'
        };

        // when returning only the JWT token
        // return jwt;        
    }

    // adding an authenticated
    @Get('user')
    async user(@Req()request:Request){

        try{
        const cookie = request.cookies['jwt'];

        const loginData = await this.jwtService.verifyAsync(cookie);

        // if loginData is invalid we throw an exception error here
        if(!loginData){
            throw new HttpException('invalid details', 404);
        }

        const loggedInUser = this.signUpServices.findOne({id: loginData['id']});
        // return cookie;
        // return loginData;

        delete (await loggedInUser).password;
        return loggedInUser;

    


        } catch (e){
            throw new UnauthorizedException();
        }
        

    }


    // Logout here
    @Post('logout')
    async logout( @Res({passthrough: true}) response:Response){
        response.clearCookie('jwt');
        return{
            message: "You have succesfully logout"
        };
    }

} 
 


