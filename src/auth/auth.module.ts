import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
// import { AuthEntity } from './auth-entity/auth.entity';
// import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {MailerModule} from '@nestjs-modules/mailer'

import { GoogleStrategy } from 'src/google/utils/GoogleStrategy';
import { Userr } from './User/user';
import { GoogleController } from '../google/google.controller';
// import { GoogleService } from './google/google.service';
import { GoogleService } from 'src/google/google.service';
import { PassportModule } from '@nestjs/passport';
// import { SessionSerializer } from './utils/serializer';
import { SessionSerializer } from 'src/google/utils/serializer';
import { UserEntity } from './User/user.entity';


@Module({
  imports: [

AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'amen',
      entities: [UserEntity, Userr],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, Userr]),

    // regigering the JWT token in the module
    JwtModule.register({
      // secret: jwtConstants.secret,
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule.register({session: true})
  ],
  controllers: [AuthController, GoogleController],
  providers: [GoogleService, GoogleStrategy, AuthService, SessionSerializer,
    {
    provide: 'Google_Service',
    useClass: GoogleService
  }],
  exports: [AuthService]
})

export class AuthModule {}

