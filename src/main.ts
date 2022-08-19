import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

// app.use(cookieParser());
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true
  })
  await app.listen(1000);
}
bootstrap();
