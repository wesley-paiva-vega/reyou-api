import { Controller, Get } from '@nestjs/common';
import { UserDto } from 'src/dto/users/users.dto';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }
}
