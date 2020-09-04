import {User} from './User';
import {ChildEntity, Column, ManyToMany, ManyToOne} from 'typeorm';
import {Course} from '../shop/entities/products/Course';
import {ShopData} from '../shop/models/ShopData';

@ChildEntity()
export class Customer extends User {

  @ManyToMany(type => Course, course => course.instructors)
  courses: Course[];

  @Column({length: 5000})
  description: string;

  @Column(type => ShopData)
  shopData: ShopData;

}
