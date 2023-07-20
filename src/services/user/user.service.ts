import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/users/users.dto';
import { UserEntity } from 'src/entities/users/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  create(user: UserDto): Promise<UserDto> {
    return this.userRepository.save(user);
  }

  findAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }
}
