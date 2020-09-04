import {User} from './User';
import {ChildEntity, Column, ManyToMany, ManyToOne} from 'typeorm';
import {Course} from '../shop/entities/products/Course';

@ChildEntity()
export class Instructor extends User {

  @ManyToMany(type => Course, course => course.instructors)
  courses: Course[];

  @Column({length: 5000})
  description: string;

}
