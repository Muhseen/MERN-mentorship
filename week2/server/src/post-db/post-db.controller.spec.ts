import { Test, TestingModule } from '@nestjs/testing';
import { PostDbController } from './post-db.controller';

describe('PostDbController', () => {
  let controller: PostDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostDbController],
    }).compile();

    controller = module.get<PostDbController>(PostDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
