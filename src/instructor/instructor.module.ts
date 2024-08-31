import { Module } from '@nestjs/common';
import { InstructorsController } from './instructor.controller';
import { InstructorService } from './instructor.service';

@Module({
  controllers: [InstructorsController],
  providers: [InstructorService],
})
export class InstructorsModule {}
