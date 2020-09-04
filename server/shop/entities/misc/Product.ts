import {Column, CreateDateColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {File} from './File';
import {ProductCategory} from './ProductCategory';

export abstract class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column({length: 5000})
  description: string;

  @OneToOne(type => File)
  thumbnail: File;

  @OneToMany(type => File, file => file.productForImages)
  images: File[];

  @ManyToMany(type => ProductCategory)
  categories: ProductCategory[];

  @Column()
  isActive: boolean;

  @Column()
  price: number;

  @Column()
  isExtern: boolean;

  @CreateDateColumn()
  creationDate: Date;


}
