import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';

import { AuthService } from './auth.service';


import { GoogleStrategy } from 'src/google/utils/GoogleStrategy';
import { Userr } from 'src/google/utils/user';
import { GoogleController } from '../google/google.controller';

import { GoogleService } from 'src/google/google.service';
import { PassportModule } from '@nestjs/passport';

import { SessionSerializer } from 'src/google/utils/serializer';
import { UserEntity } from './User/user.entity';
import { ForgotPasswordModule } from 'src/forgot-password/forgot-password.module';
import { PasswordEntity } from 'src/forgot-password/password.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { GoogleEntity } from 'src/google/google.entity';
import { LocalStrategy, } from './local-startegy';
import { jwtStrategy } from './jwt.strategy';



@Module({
  imports: [
    MailerModule.forRoot({
      transport:{
        host: '0.0.0.0',
        port: 1025
      },
      defaults:{
        from: 'startinnovation@gmail.com'
      }
    }),
    forwardRef(() => ForgotPasswordModule),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'password',
      entities: [UserEntity, Userr, PasswordEntity ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, Userr, PasswordEntity, GoogleEntity]),

    // regigering the JWT token in the module
    JwtModule.register({
      // secret: jwtConstants.secret,
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule.register({session: true})
  ],
  controllers: [AuthController, GoogleController],
  providers: [ jwtStrategy,    GoogleService, GoogleStrategy, AuthService, LocalStrategy, SessionSerializer,
    {
    provide: 'Google_Service',
    useClass: GoogleService
  }],
  exports: [AuthService]
})

export class AuthModule {}

