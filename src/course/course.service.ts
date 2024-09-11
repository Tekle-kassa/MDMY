import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Instructor } from 'src/instructor/instructor.entity';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto } from './dtos/create-course.dto';
import { InstructorService } from 'src/instructor/instructor.service';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(Instructor)
    private instructorRepository: Repository<Instructor>,
    private instructorService: InstructorService,
  ) {}

  async createCourse(
    instructorId: number,
    createCourseDto: CreateCourseDto,
  ): Promise<Course> {
    const instructor = await this.instructorService.findById(instructorId);
    const course = this.courseRepository.create({
      ...createCourseDto,
      instructor,
    });
    return this.courseRepository.save(course);
  }
  async getCourseById(id: number): Promise<Course> {
    return this.courseRepository.findOne({ where: { id } });
  }
  async getCoursesByInstructor(instructorId: number): Promise<Course[]> {
    const instructor = await this.instructorService.findById(instructorId);
    const courses = await this.courseRepository.find({
      where: { instructor: { id: instructor.id } },
    });
    return courses;
  }
}
