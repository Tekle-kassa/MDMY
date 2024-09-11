import { forwardRef, Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { UsersModule } from 'src/users/users.module';
import { EnrollmentModule } from 'src/enrollment/enrollment.module';
import { CoursesModule } from 'src/course/course.module';
import { ReviewModule } from 'src/review/review.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    forwardRef(() => UsersModule),
    forwardRef(() => EnrollmentModule),
    forwardRef(() => CoursesModule),
    forwardRef(() => ReviewModule),
  ],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
