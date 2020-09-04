import {Product} from '../misc/Product';
import {Column, Entity, ManyToMany, OneToMany} from 'typeorm';
import {Instructor} from '../../../user/Instructor';
import {File} from '../misc/File';
import {TrainingDate} from '../misc/TrainingDate';
import {Address} from '../../../user/Address';

@Entity()
export class Course extends Product {

  @ManyToMany(type => Instructor, i => i.courses)
  instructors: Instructor[];

  @Column({length: 5000})
  goodToKnow: string;

  @Column()
  maxSeats: number;

  @Column(type => Address)
  address: Address;

  @OneToMany(type => File, f => f.attachmentForCourse)
  attachments: File[];

  @OneToMany(type => TrainingDate, e => e.course)
  trainingDates: TrainingDate[];

}
