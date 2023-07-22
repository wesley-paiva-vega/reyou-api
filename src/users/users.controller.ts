import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { error } from 'console';
import { HttpResponses } from 'src/utils/http-responses';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();

    if(!users) {
      throw new Error('Não há usuários cadastrados na base de dados!') ;
    }

    return users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    const deleteUser = await this.usersService.remove(id);

    if (deleteUser.affected && deleteUser.affected > 0) {
      return HttpResponses( HttpStatus.CREATED, 'Usuário Criado com sucesso' );
    } else {
      return HttpResponses( HttpStatus.NOT_FOUND,  'Não foi possível deletar este usuário' );
    }
  }

}
