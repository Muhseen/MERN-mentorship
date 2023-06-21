import { Test, TestingModule } from '@nestjs/testing';
import { PostsControllerController } from './posts-controller.controller';

describe('PostsControllerController', () => {
  let controller: PostsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsControllerController],
    }).compile();

    controller = module.get<PostsControllerController>(PostsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
