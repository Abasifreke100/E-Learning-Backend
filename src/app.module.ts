import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeOrmConfig } from './common/config/typeorm.config';
import { AllExceptionsFilter } from './common/exceptions/all-exceptions.filter';
import { AuthModule } from './modules/v1/auth/auth.module';
import { JwtAuthGuard } from './modules/v1/auth/guards/jwt-auth.guard';
import { MailModule } from './modules/v1/mail/mail.module';
import { UserModule } from './modules/v1/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UserModule,
    MailModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
})
export class AppModule {}
