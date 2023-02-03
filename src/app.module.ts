import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeOrmConfig } from './common/config/typeorm.config';
import { AuthModule } from './modules/v1/auth/auth.module';
import { UserModule } from './modules/v1/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UserModule
  ],
  providers: [],
})
export class AppModule {}
