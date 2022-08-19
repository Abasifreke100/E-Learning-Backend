
import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { loginUserDto } from "./dto/loginUser.dto";
import { UserService } from "./user.service";
import *as bcrypt from 'bcrypt';

@Controller('users')
export class userController{
    constructor (private userService: UserService){}

    @Post('signup')
   async SignUp(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('dob') dob: string,
    @Body('role') role: string,
    @Body('phone') phone: number,

    ){
        const hashedPassword = await bcrypt.hash(password, 12);

        return this.userService.signUp({name, email, password:hashedPassword, dob, role, phone})
    }


    // @Post('login')
    // @HttpCode(200)
    // login(@Body() loginUsersDto: loginUserDto):Observable<string>{
    //     return this.userService.login(loginUsersDto)
    // }

    // @Get()
    // findAll(): Observable<User[]>{
    //     return
    // }

}