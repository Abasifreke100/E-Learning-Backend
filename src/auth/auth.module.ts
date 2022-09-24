import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { authEntity } from './auth-entity/auth.entity';
import { AuthController } from './auth.controller';
// import { AuthEntity } from './auth-entity/auth.entity';
// import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {MailerModule} from '@nestjs-modules/mailer'
import { GoogleStrategy } from './utils/GoogleStrategy';
import { Userr } from './User/user';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './utils/serializer';


@Module({
  imports: [
// MailerModule.forRoot({
//   transport: {
//     host: 'smtp.sendgrid.net',
//     auth:{
//       user: 'apikey',
//       pass: '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'
//     }
//   }
// }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'amen',
      entities: [authEntity, Userr],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([authEntity, Userr]),

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
})
export class AuthModule {}

