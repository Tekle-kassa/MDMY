import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Instructor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  bio: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  joiningDate: Date;
}
