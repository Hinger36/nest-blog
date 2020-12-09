import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cat } from './cats.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat) private readonly catRepo: Repository<Cat>,
  ) {}

  async create(cat: Cat): Promise<Cat> {
    delete cat.id;
    return this.catRepo.save(this.catRepo.create(cat));
  }

  async findAll(): Promise<Cat[]> {
    return this.catRepo.find();
  }
}
