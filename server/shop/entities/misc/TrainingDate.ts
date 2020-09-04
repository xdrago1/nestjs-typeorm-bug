import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Course} from '../products/Course';
import {Address} from '../../../user/Address';
import {TrainingDay} from './TrainingDay';
import {CourseBooking} from './CourseBooking';

@Entity()
export class TrainingDate {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  additionalInformation: string;

  @OneToMany(type => TrainingDay, d => d.trainingDate)
  days: TrainingDay[];

  @ManyToOne(type => Course, c => c.trainingDates)
  course: Course;

  @OneToMany(type => CourseBooking, c => c.bookedDate)
  bookings: CourseBooking[];

  @Column()
  blockedSeats: number;

  @Column()
  isActive: boolean;

}
