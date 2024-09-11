import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class ReviewCourseDto {
  @IsNumber()
  @IsNotEmpty()
  @Max(5)
  @Min(1)
  rating: number;
  @IsString()
  @IsOptional()
  comment: string;
}
