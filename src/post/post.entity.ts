import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn({
    comment: '自增主键ID',
  })
  id: number;

  @Column({ type: 'varchar', length: 150, comment: '标题' })
  title!: string;

  @Column({ type: 'text', comment: '内容' })
  content!: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    comment: '创建时间',
  })
  createAt: Date;
}
