import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { TypeOrmModule } from '@nestjs/typeorm';


import { Userr } from './auth/User/user';

import { PassportModule } from '@nestjs/passport';


import { UserEntity } from './auth/User/user.entity';
import { GoogleModule } from './google/google.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { PasswordEntity } from './forgot-password/password.entity';
import { GoogleEntity } from './google/google.entity';



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
      database: 'password',
      entities: [UserEntity, Userr, PasswordEntity, GoogleEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, Userr, PasswordEntity]),

    // regigering the JWT token in the module
    JwtModule.register({
      // secret: jwtConstants.secret,
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule.register({session: true}),
    GoogleModule,
    ForgotPasswordModule,
    
  ],
 
})
export class AppModule {}

