import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @Post()
  login() {
    return { message: '登录成功', data: {} };
  }

  @Get('profile')
  profile() {
    return { message: '成功', data: {} };
  }

  @Get('refresh')
  refreshToken() {
    return { message: '刷新成功', data: {} };
  }
}
