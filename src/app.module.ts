import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatsModule } from './cats/cats.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [TypeOrmModule.forRoot(), CatsModule, PostModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
