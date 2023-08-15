import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './todo/task/task.module';
import { ProductModule } from './shop/product/product.module';
import { TransactionModule } from './shop/transaction/transaction.module';
import { ConfigModuleModule } from './config-module/config-module.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthControllerController } from './auth-controller/auth-controller.controller';
@Module({
  imports: [
    TaskModule,
    ProductModule,
    TransactionModule,
    ConfigModuleModule,
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/mentorship?directConnection=true&serverSelectionTimeoutMS=2000',
    ),
  ],
  controllers: [AppController, AuthControllerController],
  providers: [AppService],
})
export class AppModule {}
