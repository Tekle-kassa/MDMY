import { Module } from '@nestjs/common';
import { CourseContentController } from './course-content.controller';
import { CourseContentService } from './course-content.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './course-content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Content])],
  controllers: [CourseContentController],
  providers: [CourseContentService],
})
export class CourseContentModule {}
