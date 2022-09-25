import { forwardRef, Module } from '@nestjs/common';
import { ForgotPasswordService } from './forgot-password.service';
import { ForgotPasswordController } from './forgot-password.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/User/user.entity';
import { Userr } from 'src/auth/User/user';
import { PasswordEntity } from './password.entity';


@Module({
  imports:[forwardRef(() => AuthModule),
  
  
    TypeOrmModule.forFeature([UserEntity, Userr, PasswordEntity]),],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService],
  exports: [ForgotPasswordService]
})
export class ForgotPasswordModule {}
