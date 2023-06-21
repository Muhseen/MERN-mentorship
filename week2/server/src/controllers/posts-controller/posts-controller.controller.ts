import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { Request, Response, response } from 'express';
import { CreatePostDto } from 'src/dtos/create-post.dto';
//This controller does not persist any data to any storage,
//it is a mere test for /posts routes working
@Controller('posts')
export class PostsControllerController {
  @Get()
  getPosts() {
    return {
      title: 'New Post',
      description: 'Lorem Ipsum',
    };
  }

  @Get(':id')
  getSpecificPost(@Param('id') id: string) {
    return { id };
  }

  @Get('comments')
  getPostComments() {
    return {
      title: 'New Post',
      description: 'Lorem Ipsum',
      comments: [
        {
          id: 1,
          user: 'Muhsin Ahmad',
          comment: 'Great Read!',
        },
        {
          id: 2,
          user: 'Sample User ',
          comment: 'Lorem Ipsum',
        },
      ],
    };
  }

  @Post()
  createPost(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    //return response
    //  response.send("well");
    response.send({
      id: 100,
      title: 'Post Created',
    });
  }

  @Post('dto')
  @UsePipes(new ValidationPipe())
  createPostDTO(@Body() postData: CreatePostDto, @Res() response: Response) {
    console.log(postData);
    response.send(postData);
  }
}
