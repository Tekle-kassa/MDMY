import { forwardRef, Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './review.entity';
import { StudentModule } from 'src/student/student.module';
import { CoursesModule } from 'src/course/course.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Review]),
    forwardRef(() => StudentModule),
    forwardRef(() => CoursesModule),
  ],
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService],
})
export class ReviewModule {}
