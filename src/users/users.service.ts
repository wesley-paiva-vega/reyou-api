import {  HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  async findAll() {
    const users = await this.userRepository.find();
    
    if(users.length === 0){
      throw new NotFoundException('Não há usuários cadastrados')
    }else {
      return users;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
