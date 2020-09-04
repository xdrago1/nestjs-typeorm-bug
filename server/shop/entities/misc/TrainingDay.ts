import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {TrainingDate} from './TrainingDate';

@Entity()
export class TrainingDay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @ManyToOne(type => TrainingDate, date => date.days)
  trainingDate: TrainingDate;

}
