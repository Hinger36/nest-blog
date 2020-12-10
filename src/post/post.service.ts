import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto, EditPostDto } from './dtos';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  createPost(dto: CreatePostDto) {
    const post = this.postRepository.create(dto);
    return this.postRepository.save(post);
  }

  getAllPost() {
    return this.postRepository.find();
  }

  getPostById(id: number) {
    return this.postRepository.findOne(id);
  }

  async editPostById(id: number, dto: EditPostDto) {
    const post = await this.postRepository.findOne(id);
    if (!post) throw new NotFoundException('文章不存在');
    return this.postRepository.save({ ...post, ...dto });
  }

  removePostById(id: number) {
    return this.postRepository.delete(id);
  }
}
