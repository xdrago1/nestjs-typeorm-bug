import {OneToOne} from 'typeorm';
import {Address} from '../../user/Address';

export class ShopData {

  @OneToOne(type => Address)
  deliveryAddress: Address;

  @OneToOne(type => Address)
  invoiceAddress: Address;

}
