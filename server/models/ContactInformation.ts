import {Column, OneToOne} from 'typeorm';
import {Address} from '../user/Address';

export class ContactInformation {
  @OneToOne(type => Address)
  address: Address;

  @Column()
  phone: string;

  @Column()
  websiteUrl: string;
}
