import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UserController } from './controllers/user/user.controller';
import { UsersModule } from './entities/users/users.module';
import { UserService } from './services/user/user.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
