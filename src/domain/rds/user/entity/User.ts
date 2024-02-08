import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'user' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ unsigned: true, comment: '' })
    id!: number;

    @Column({ type: 'varchar', length: 10 })
    name: string = '';

    @Column({ type: 'varchar', length: 30 })
    age: number = 0;
}
