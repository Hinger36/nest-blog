import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto, EditPostDto } from './dtos';
import { PostService } from './post.service';

@ApiTags('Posts')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAllPost() {
    const data = await this.postService.getAllPost();
    return { message: 'success', data: { items: data } };
  }

  @Get(':id')
  async getPostById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.postService.getPostById(id);
    return { message: 'success', data };
  }

  @Post()
  async createPost(@Body() dto: CreatePostDto) {
    const data = await this.postService.createPost(dto);
    return { message: 'Post created', data };
  }

  @Put(':id')
  async editPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditPostDto,
  ) {
    const data = await this.postService.editPostById(id, dto);
    return { message: 'Post edited', data };
  }

  @Delete(':id')
  async removePost(@Param('id', ParseIntPipe) id: number) {
    await this.postService.removePostById(id);
    return { message: 'Post deleted', data: { id } };
  }
}
