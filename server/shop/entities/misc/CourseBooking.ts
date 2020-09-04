import {Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {TrainingDate} from './TrainingDate';
import {CourseParticipant} from './CourseParticipant';
@Entity()
export class CourseBooking {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => TrainingDate, c => c.bookings)
  bookedDate: TrainingDate;

  @OneToMany(type => CourseParticipant, p => p.booking)
  participants: CourseParticipant[];

  @CreateDateColumn()
  creationDate: Date;

}
