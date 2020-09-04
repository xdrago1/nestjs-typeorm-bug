import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {CourseBooking} from './CourseBooking';

@Entity()
export class CourseParticipant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => CourseBooking, b => b.participants)
  booking: CourseBooking;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
