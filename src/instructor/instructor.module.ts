import { forwardRef, Module } from '@nestjs/common';
import { InstructorsController } from './instructor.controller';
import { InstructorService } from './instructor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instructor } from './instructor.entity';
import { UsersModule } from 'src/users/users.module';
import { CoursesModule } from 'src/course/course.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Instructor]),
    forwardRef(() => UsersModule),
    forwardRef(() => CoursesModule),
  ],
  controllers: [InstructorsController],
  providers: [InstructorService],
  exports: [InstructorService, TypeOrmModule],
})
export class InstructorsModule {}
