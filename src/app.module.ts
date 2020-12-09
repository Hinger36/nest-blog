import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PostController } from './post/post.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), CatsModule],
  controllers: [AppController, PostController],
  providers: [AppService],
})
export class AppModule {}
