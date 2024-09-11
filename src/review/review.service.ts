import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewCourseDto } from './dtos/review-course.dto';
import { Student } from 'src/student/student.entity';
import { Course } from 'src/course/course.entity';
import { StudentService } from 'src/student/student.service';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewRepository: Repository<Review>,
    private studentService: StudentService,
    private courseService: CourseService,
  ) {}
  async review(
    studentId: number,
    courseId: number,
    reviewCourseDto: ReviewCourseDto,
  ): Promise<Review> {
    const student = await this.studentService.findById(studentId);
    const course = await this.courseService.getCourseById(courseId);
    const review = this.reviewRepository.create({
      student,
      course,
      ...reviewCourseDto,
    });
    await this.reviewRepository.save(review);
    return review;
  }
}
