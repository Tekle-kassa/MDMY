import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { CourseService } from 'src/course/course.service';
import { CreateCourseDto } from 'src/course/dtos/create-course.dto';
import { UsersService } from 'src/users/users.service';

@Controller('instructors')
export class InstructorsController {
  constructor(
    private instructorService: InstructorService,
    private usersService: UsersService,
    private courseService: CourseService,
  ) {}
  @Post(':id/courses')
  async createCourse(
    @Param('id') instructorId: number,
    @Body() createCourseDto: CreateCourseDto,
  ) {
    return this.courseService.createCourse(instructorId, createCourseDto);
  }
  @Get(':id/courses')
  async myCourses(@Param('id') instructorId: number) {
    return this.courseService.getCoursesByInstructor(instructorId);
  }
}
