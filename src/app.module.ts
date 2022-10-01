import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Userr } from './google/utils/user';

import { PassportModule } from '@nestjs/passport';


import { UserEntity } from './auth/User/user.entity';
import { GoogleModule } from './google/google.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { PasswordEntity } from './forgot-password/password.entity';
import { GoogleEntity } from './google/google.entity';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    AuthModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'password',
      entities: [UserEntity, Userr, PasswordEntity, GoogleEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, Userr, PasswordEntity, GoogleEntity]),

    // regigering the JWT token in the module
    JwtModule.register({
      // secret: jwtConstants.secret,
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule.register({session: true}),
    GoogleModule,
    forwardRef(() => ForgotPasswordModule),
  
    
  ],
 
})
export class AppModule {}

