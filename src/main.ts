import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AuthModule } from './auth/auth.module';
import * as session from 'express-session';
import * as passport from 'passport'




async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  
  app.use(session({
    secret: 'unique',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000,
    }
  }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // add this configuration so the frontend can retrieve our logged in users 
  app.enableCors({
    origin: 'http://localhost:4000',
    credentials: true
  });

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(2000);
}
bootstrap();
