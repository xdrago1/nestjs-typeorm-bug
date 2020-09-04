import {Column, Entity, OneToMany} from 'typeorm';
import {Product} from '../misc/Product';
import {File} from '../misc/File';

@Entity()
export class DigitalProduct extends Product {

  @Column()
  stockAmount: number;

  @Column()
  reservations: number;

  @Column()
  shippingInformation: string;

  @Column()
  orderedProductUrl: string;

  @OneToMany(type => File, f => f.digitalProduct)
  files: File[];

}
