import { Course } from 'src/course/course.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Course, (course) => course.contents, { nullable: false })
  course: Course;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 50 })
  contentType: string;

  @Column('text')
  contentUrl: string;

  @Column()
  contentOrder: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
