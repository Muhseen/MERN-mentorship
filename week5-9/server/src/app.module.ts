import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './todo/task/task.module';
import { ProductModule } from './shop/product/product.module';
import { TransactionModule } from './shop/transaction/transaction.module';
import { ConfigModuleModule } from './config-module/config-module.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthControllerController } from './auth-controller/auth-controller.controller';
import { UserModule } from './user/user.module';
import { CONN_STR } from './config';
@Module({
  imports: [
    TaskModule,
    ProductModule,
    TransactionModule,
    ConfigModuleModule,
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forRoot(CONN_STR),
    UserModule,
  ],
  controllers: [AppController, AuthControllerController],
  providers: [AppService],
})
export class AppModule {}
