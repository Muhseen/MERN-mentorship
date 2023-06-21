import { Test, TestingModule } from '@nestjs/testing';
import { PostDbService } from './post-db.service';

describe('PostDbService', () => {
  let service: PostDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostDbService],
    }).compile();

    service = module.get<PostDbService>(PostDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
