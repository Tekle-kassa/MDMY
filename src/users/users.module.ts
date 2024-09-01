import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Instructor } from 'src/instructor/instructor.entity';
import { InstructorsModule } from 'src/instructor/instructor.module';
import { Student } from 'src/student/student.entity';
import { AdminsModule } from 'src/admin/admin.module';
import { StudentModule } from 'src/student/student.module';
import { Admin } from 'src/admin/admin.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([User, Instructor, Student, Admin]),
    forwardRef(() => InstructorsModule),
    forwardRef(() => AdminsModule),
    forwardRef(() => StudentModule),
  ], //creates the repository
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
