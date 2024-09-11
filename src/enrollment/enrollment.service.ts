import { Injectable } from '@nestjs/common';
import { Course } from 'src/course/course.entity';
import { Student } from 'src/student/student.entity';
import { Enrollment } from './enrollment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentService } from 'src/student/student.service';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private enrollmentRepository: Repository<Enrollment>,
    private studentService: StudentService,
    private courseService: CourseService,
  ) {}
  async enroll(studentId: number, courseId: number): Promise<Enrollment> {
    const student = await this.studentService.findById(studentId);
    const course = await this.courseService.getCourseById(courseId);
    const enrollment = this.enrollmentRepository.create({
      student: student,
      course,
      enrollmentDate: Date.now(),
    });
    await this.enrollmentRepository.save(enrollment);
    return enrollment;
  }
  async getEnrollmentById(id: number): Promise<Enrollment> {
    return this.enrollmentRepository.findOne({ where: { id } });
  }
  async getCoursesByStudent(studentId: number): Promise<Course[]> {
    const enrollments = await this.enrollmentRepository.find({
      where: { student: { id: studentId } },
      relations: ['course'],
    });
    return enrollments.map((enrollment) => enrollment.course);
  }
}
// find * from courses where ,find all the enrollments where there is a student id===passed id,then find those courses
