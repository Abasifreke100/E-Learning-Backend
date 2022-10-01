import { BadRequestException, Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { ForgotPasswordService } from './forgot-password.service';
import * as bcrypt from 'bcrypt';

@Controller('api')
export class ForgotPasswordController {
  constructor(private readonly forgotPasswordService: ForgotPasswordService,
    private authService: AuthService,
    ) {}

@Post('forgot')
  async forgot(@Body('email') email: string){
    const token = Math.random().toString(20).substr(2, 20)

   const forgot = await this.forgotPasswordService.create({
      email,
      token
    });

    
    return forgot;

  }

  @Post('reset')
  async reset(
      @Body('token') token: string,
      @Body('password') password: string,
      @Body('password_confirm') password_confirm: string
      ){
          if(password !== password_confirm){
              throw new BadRequestException('passwords do not match');

          }

          const passwordReset: any = await this.forgotPasswordService.findOne({token});
          
          const user = await this.authService.findOne({email:passwordReset.email});

          if(!user){
            throw new NotFoundException('user not found');
          }

          const hashPassword = await bcrypt.hash(password, 12); 

          await this.authService.update(user.id,{password:hashPassword});

          return{
            msg: 'Reset Sucessful'
          }
      }
}
   