import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { EnrollmentService } from 'src/enrollment/enrollment.service';
import { CourseService } from 'src/course/course.service';
import { ReviewCourseDto } from 'src/review/dtos/review-course.dto';
import { ReviewService } from 'src/review/review.service';

@Controller('student')
export class StudentController {
  constructor(
    private studentService: StudentService,
    private enrollmentService: EnrollmentService,
    private courseService: CourseService,
    private reviewService: ReviewService,
  ) {}
  @Post('enroll/:studentId/:courseId')
  async enroll(
    @Param('studentId') studentId: number,
    @Param('courseId') courseId: number,
  ) {
    return this.enrollmentService.enroll(studentId, courseId);
  }
  @Get(':id/courses')
  async myCourses(@Param('id') studentId: number) {
    const courses = await this.enrollmentService.getCoursesByStudent(studentId);
    return { courses };
  }
  @Post('review/:studentId/:courseId')
  async reviewCourse(
    @Param('studentId') studentId: number,
    @Param('courseId') courseId: number,
    @Body() body: ReviewCourseDto,
  ) {
    return this.reviewService.review(studentId, courseId, body);
  }
}
