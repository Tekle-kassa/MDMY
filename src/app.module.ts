import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './course/course.module';
import { UsersModule } from './users/users.module';
import { InstructorsModule } from './instructor/instructor.module';
import { AdminsModule } from './admin/admin.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { StudentModule } from './student/student.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'mydmy',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CoursesModule,
    UsersModule,
    InstructorsModule,
    AdminsModule,
    EnrollmentModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
