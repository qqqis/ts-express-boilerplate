import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ unsigned: true, comment: '' })
  id!: number

  @Column({ type: 'varchar', length: 10 })
  userName: string = '';

  @Column({ type: 'varchar', length: 30 })
  email: string = '';
}
