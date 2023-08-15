import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './todo/task/task.module';
import { ProductModule } from './shop/product/product.module';
import { TransactionModule } from './shop/transaction/transaction.module';

@Module({
  imports: [TaskModule, ProductModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
