import { Content } from 'src/course-content/course-content.entity';
import { Enrollment } from 'src/enrollment/enrollment.entity';
import { Instructor } from 'src/instructor/instructor.entity';
import { Review } from 'src/review/review.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
} from 'typeorm';
@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column()
  duration: number;

  @Column()
  level: string;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.course)
  enrollments?: Enrollment[];

  @ManyToOne(() => Instructor, (instructor) => instructor.courses, {
    nullable: false,
  })
  instructor: Instructor;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Content, (content) => content.course)
  contents: Content[];

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  @OneToMany(() => Review, (review) => review.course)
  reviews: Review[];
  updatedAt: Date;
}
