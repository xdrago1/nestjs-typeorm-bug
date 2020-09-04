import {Column, Entity} from 'typeorm';
import {Product} from '../misc/Product';

@Entity()
export class PhysicalProduct extends Product {

  @Column()
  stockAmount: number;

  @Column()
  reservations: number;

  @Column()
  shippingInformation: string;

}
