import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersService } from './orders/orders.service';
import { AnythingController } from './anything/anything.controller';

@Module({
  imports: [],
  controllers: [AppController, AnythingController],
  providers: [AppService, OrdersService],
})
export class AppModule {}
