import { Module } from '@nestjs/common';
// import { GoogleService } from './google.service';
// import { GoogleController } from './google.controller';
import { GoogleService } from './google.service';
import { GoogleStrategy } from 'src/google/utils/GoogleStrategy';
import { GoogleController } from './google.controller';
import { SessionSerializer } from 'src/google/utils/serializer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/User/user.entity';
import { PasswordEntity } from 'src/forgot-password/password.entity';
import { Userr } from 'src/auth/User/user';
import { GoogleEntity } from './google.entity';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
    transport:{
      host: '0.0.0.0',
      port: 1025
    },
    defaults:{
      from: 'akpanmbietidughe@gmail.com'
    }
  }),
  TypeOrmModule.forFeature([UserEntity, Userr, PasswordEntity, GoogleEntity]),],

  controllers: [GoogleController],
  providers: [GoogleService, GoogleStrategy,SessionSerializer,
  
    {
      provide: 'Google_Service',
      useClass: GoogleService
    }],
  exports: [GoogleService]

})
export class GoogleModule {}
