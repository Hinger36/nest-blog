import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ comment: '自增主键' })
  id: number;

  @Column({ comment: '名字', type: 'varchar', length: 255 })
  name: string;

  @Column({
    comment: '邮箱地址',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  email: string;

  @Column({ comment: '密码', type: 'varchar', length: 128, nullable: false })
  password: string;

  @CreateDateColumn({
    comment: '创建时间',
    type: 'timestamp',
    name: 'create_at',
  })
  createAt: Date;
}
