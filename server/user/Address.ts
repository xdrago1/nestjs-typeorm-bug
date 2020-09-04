import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Address {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  addressAdditional: string;

  @Column()
  zip: number;

  @Column()
  city: string;

  @Column()
  country: string;

}
