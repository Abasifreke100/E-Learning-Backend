import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as morgan from 'morgan';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * cors configuration
   */
  app.enableCors({
    origin: '*',
    credentials: true,
  });

  /**
   * morgan logger for development
   */
  if(process.env.APP_IN_DEVELOPMENT == 'true'){
    app.use(morgan('combined'))
  }

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();