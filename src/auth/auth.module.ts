import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppService } from 'src/app.service';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';


@Module({
  // 
  imports: [
    forwardRef(() =>  UserModule)
  ],

 exports: [AuthService],
 
  providers: [AppService, AuthService],


})
export class AuthModule {}
