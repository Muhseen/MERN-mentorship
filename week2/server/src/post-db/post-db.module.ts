import { Module } from '@nestjs/common';
import { PostDbController } from './post-db.controller';
import { PostDbService } from './post-db.service';

@Module({
  controllers: [PostDbController],
  providers: [PostDbService]
})
export class PostDbModule {}
