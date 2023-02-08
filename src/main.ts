import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ENVIRONMENT } from './common/config/environment';
import { JwtAuthGuard } from './modules/v1/auth/guards/jwt-auth.guard';
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
  if(ENVIRONMENT.APP.IN_DEVELOPMENT == 'true'){
    app.use(morgan('combined'))
  }

  /**
   * prefix
   */
  app.setGlobalPrefix('/api/v1')


  /**
   * pipes
   */
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(ENVIRONMENT.APP.PORT || 3000);
}
bootstrap();