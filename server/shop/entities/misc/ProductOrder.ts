import {Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {OrderStatus} from '../../models/enums/OrderStatus';
import {PaymentMethod} from '../../models/enums/PaymentMethod';
import {CourseBooking} from './CourseBooking';
import {PhysicalProduct} from '../products/PhysicalProduct';
import {DigitalProduct} from '../products/DigitalProduct';

@Entity()
export class ProductOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 5000})
  additionalInformation: string;

  @Column('enum', {enum: OrderStatus})
  status: OrderStatus;

  @Column('enum', {enum: PaymentMethod})
  paymentMethod: PaymentMethod;

  @ManyToMany(type => CourseBooking)
  @JoinTable()
  orderedCourseBookings: CourseBooking[];

  @ManyToMany(type => PhysicalProduct)
  @JoinTable()

  orderedPhysicalProducts: PhysicalProduct[];

  @ManyToMany(type => DigitalProduct)
  @JoinTable()
  orderedDigitalProducts: DigitalProduct[];

  @CreateDateColumn()
  creationDate: Date;
}
