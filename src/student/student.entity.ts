import { Enrollment } from 'src/enrollment/enrollment.entity';
import { Review } from 'src/review/review.entity';
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
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.student)
  @JoinColumn()
  user: User;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  enrollments: Enrollment[];
  @OneToMany(() => Review, (review) => review.student)
  reviews: Review[];
}
