import { forwardRef, Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { InstructorsModule } from 'src/instructor/instructor.module';
import { EnrollmentModule } from 'src/enrollment/enrollment.module';
import { StudentModule } from 'src/student/student.module';
import { ReviewService } from 'src/review/review.service';
import { ReviewModule } from 'src/review/review.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Course]),
    forwardRef(() => InstructorsModule),
    forwardRef(() => EnrollmentModule),
    forwardRef(() => StudentModule),
    forwardRef(() => ReviewModule),
  ],

  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CoursesModule {}
