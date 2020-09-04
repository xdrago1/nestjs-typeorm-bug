import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  maxUse: number;
}
