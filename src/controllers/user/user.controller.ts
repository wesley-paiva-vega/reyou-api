import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get('list')
  findAll(): string {
    return 'get all the fucking list';
  }
}
