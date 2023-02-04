import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeOrmConfig } from './common/config/typeorm.config';
import { AllExceptionsFilter } from './common/exceptions/all-exceptions.filter';
import { AuthModule } from './modules/v1/auth/auth.module';
import { MailModule } from './modules/v1/mail/mail.module';
import { OtpModule } from './modules/v1/otp/otp.module';
import { UserModule } from './modules/v1/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UserModule,
    MailModule,
    OtpModule
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    }
  ],
})
export class AppModule {}
