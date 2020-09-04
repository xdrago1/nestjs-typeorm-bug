import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Product} from './Product';
import {Course} from '../products/Course';
import {DigitalProduct} from '../products/DigitalProduct';

@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  url: string;

  @ManyToOne(type => Product)
  productForImages: Product;

  @ManyToOne(type => Course)
  attachmentForCourse: Course;

  @ManyToOne(type => DigitalProduct)
  digitalProduct: DigitalProduct;

}
