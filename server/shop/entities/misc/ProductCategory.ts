import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({length: 5000})
  description: string;

}
