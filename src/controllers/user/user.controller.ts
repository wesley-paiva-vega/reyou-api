import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('list')
  findAll(): string {
    return 'get all the fucking list';
  }
}
