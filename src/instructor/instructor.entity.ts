import { Course } from 'src/course/course.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
@Entity()
export class Instructor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { default: '' })
  bio?: string;

  @OneToOne(() => User, (user) => user.instructor)
  @JoinColumn()
  user: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  joiningDate: Date;

  @OneToMany(() => Course, (course) => course.instructor)
  courses: Course[];
}
