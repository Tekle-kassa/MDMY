import { IsInt, Max, Min } from 'class-validator';
import { Course } from 'src/course/course.entity';
import { Student } from 'src/student/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsInt()
  @Max(5)
  @Min(1)
  rating: number;
  @Column()
  comment: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @ManyToOne(() => Student, (student) => student.reviews)
  student: Student;
  @ManyToOne(() => Course, (course) => course.reviews)
  course: Course;
}
