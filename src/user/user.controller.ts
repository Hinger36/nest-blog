import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateUserDto, EditUserDto } from './dtos';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    const users = await this.userService.getAll();
    return { code: 200, message: 'success', data: { items: users } };
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.getOne(id);
    return { code: 200, message: 'success', data: user };
  }

  @Post()
  async createOne(@Body() dto: CreateUserDto) {
    const user = await this.userService.create(dto);
    return { code: 201, message: 'User created', data: user };
  }

  @Put(':id')
  async editOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditUserDto,
  ) {
    const user = await this.userService.edit(id, dto);
    return { code: 200, message: 'User edited', data: user };
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.userService.remove(id);
    return { code: 204, message: 'User deleted', data: data };
  }
}
