import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { PostsControllerController } from './controllers/posts-controller/posts-controller.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostDbModule } from './post-db/post-db.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    PostsModule,
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/mentorship?directConnection=true&serverSelectionTimeoutMS=2000',
    ),
    PostDbModule,
    UsersModule,
  ],
  controllers: [AppController, PostsControllerController],
  providers: [AppService],
})
export class AppModule {}
