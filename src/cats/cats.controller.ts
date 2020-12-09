import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Cat } from './cats.entity';
import { CatsService } from './cats.service';
import { Result } from './interfaces/result.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: Cat): Promise<Result> {
    await this.catsService.create(createCatDto);
    return { code: 200, message: '创建成功' };
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(id);
    return { code: 200, message: '查询成功' };
  }
}
