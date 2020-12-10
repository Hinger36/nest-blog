import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatsModule } from './cats/cats.module';
import { PostModule } from './post/post.module';
@Module({
  imports: [TypeOrmModule.forRoot(), CatsModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
