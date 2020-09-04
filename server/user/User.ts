import {Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn, TableInheritance} from 'typeorm';
import {Identity} from '../models/Identity';
import {Role} from './Role';
import {ContactInformation} from '../models/ContactInformation';

@TableInheritance({column: {type: 'varchar', name: 'type'}})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(type => Identity)
  identity: Identity;

  @Column(type => ContactInformation)
  contact: ContactInformation;

  @ManyToOne(type => Role)
  role: Role;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  creationDate: Date;

}
