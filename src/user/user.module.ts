import { forwardRef, Module } from '@nestjs/common';
// import { UserService } from './user.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import {  UserEntity } from './entities/user.entity';
import { userController } from './user.controller';

import { UserService } from './user.service';


@Module({
  imports:[TypeOrmModule.forFeature([UserEntity]), forwardRef(() => AuthModule)],
  controllers: [userController],
  providers: [UserService],
  exports:[TypeOrmModule, UserService]
})
export class UserModule {}
