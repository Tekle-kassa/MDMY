import { forwardRef, Module } from '@nestjs/common';
import { InstructorsController } from './instructor.controller';
import { InstructorService } from './instructor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instructor } from './instructor.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Instructor]),
    forwardRef(() => UsersModule),
  ],
  controllers: [InstructorsController],
  providers: [InstructorService],
})
export class InstructorsModule {}
