import {Column} from 'typeorm';

export class Identity {
  @Column()
  company: string;

  @Column()
  gender: string;

  @Column()
  academicTitle: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  birthday: Date;
}
