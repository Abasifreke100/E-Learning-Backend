import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, OrdersService],
})
export class AppModule {}
