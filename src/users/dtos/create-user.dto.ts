import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  email: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  password: string;

  @IsEnum(['student', 'instructor', 'admin'])
  @IsNotEmpty()
  role: 'student' | 'instructor' | 'admin';
}
