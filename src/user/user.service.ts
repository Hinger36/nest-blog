import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto, EditUserDto } from './dtos';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  getAll() {
    return this.userRepo.find();
  }

  async getOne(id: number) {
    const user = await this.userRepo.findOne(id);
    if (!user) throw new NotFoundException('User does not exists');
    return user;
  }

  async create(dto: CreateUserDto) {
    const userExist = await this.userRepo.findOne({ email: dto.email });
    if (userExist)
      throw new BadRequestException('User already registered with email');
    const post = this.userRepo.create(dto);
    const user = await this.userRepo.save(post);
    delete user.password;
    return user;
  }

  async edit(id: number, dto: EditUserDto) {
    const user = await this.getOne(id);
    return this.userRepo.save({ ...user, ...dto });
  }

  async remove(id: number) {
    const user = await this.getOne(id);
    return this.userRepo.remove(user);
  }
}
