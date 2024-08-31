import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { InstructorsModule } from './instructors/instructors.module';
import { AdminsModule } from './admins/admins.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
