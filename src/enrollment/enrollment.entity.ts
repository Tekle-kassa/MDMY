import { Course } from 'src/course/course.entity';
import { Student } from 'src/student/student.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  enrollmentDate: Date;

  @ManyToOne(() => Student, (student) => student.enrollments)
  student: Student;

  @ManyToOne(() => Course, (course) => course.enrollments)
  course: Course;

  @Column({ type: 'int', default: 0 })
  progress: number;
}
