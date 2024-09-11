import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Instructor } from './instructor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstructorService {
  constructor(
    @InjectRepository(Instructor)
    private instructorRepository: Repository<Instructor>,
  ) {}
  async findById(id: number): Promise<Instructor> {
    return this.instructorRepository.findOne({
      where: { user: { id } },
      relations: ['user'],
    });
  }
}
