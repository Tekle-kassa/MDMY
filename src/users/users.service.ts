import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { Student } from 'src/student/student.entity';
import { Instructor } from 'src/instructor/instructor.entity';
import { Admin } from 'src/admin/admin.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @InjectRepository(Instructor)
    private instructorRepository: Repository<Instructor>,

    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
  ) {}
  async registerUser(registerDto: CreateUserDto): Promise<User> {
    const { firstName, lastName, password, email, role } = registerDto;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = this.usersRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });
    await this.usersRepository.save(user);
    if (registerDto.role === 'student') {
      const student = this.studentRepository.create({
        user,
      });
      await this.studentRepository.save(student);
    } else if (registerDto.role === 'instructor') {
      const instructor = this.instructorRepository.create({
        user,
      });
      await this.instructorRepository.save(instructor);
    } else if (registerDto.role === 'admin') {
      const admin = this.adminRepository.create({});
      await this.adminRepository.save(admin);
    }

    return user;
  }
  async findById(id: number): Promise<User> {
    if (!id) {
      return null;
    }
    return await this.usersRepository.findOne({ where: { id } });
  }
  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }
}
