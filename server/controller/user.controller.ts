import {Body, Controller, Post, Req} from '@nestjs/common';
import {User} from '../user/User';
import {getManager} from 'typeorm';
import {Request} from 'express';

@Controller('user')
export class UserController {

  karen = getManager();

  @Post()
  async registerUser(@Req() req: Request,  @Body() userData: User): Promise<User> {

    // ToDo: implementing Check for permissions / override variables

    return await this.karen.save(userData);
  }

}
