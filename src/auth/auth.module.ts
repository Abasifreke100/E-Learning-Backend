import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { authEntity } from './auth-entity/auth.entity';
import { AuthController } from './auth.controller';
// import { AuthEntity } from './auth-entity/auth.entity';
// import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'login',
      entities: [authEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([authEntity]),

    // regigering the JWT token in the module
    JwtModule.register({
      // secret: jwtConstants.secret,
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
