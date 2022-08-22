import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AuthModule } from './auth/auth.module';



async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  // add this configuration so the frontend can retrieve our logged in users 
  app.enableCors({
    origin: 'http://localhost:4000',
    credentials: true
  });

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8080);
}
bootstrap();
