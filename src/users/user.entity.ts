import { Instructor } from 'src/instructor/instructor.entity';
import { Student } from 'src/student/student.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'enum', enum: ['student', 'instructor', 'admin'] })
  role: 'student' | 'instructor' | 'admin';

  @Column({ default: '' })
  profilePictureUrl?: string;

  @OneToOne(() => Instructor, (instructor) => instructor.user, {
    nullable: true,
  })
  instructor?: Instructor;

  @OneToOne(() => Student, (student) => student.user, {
    nullable: true,
  })
  student?: Student;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
