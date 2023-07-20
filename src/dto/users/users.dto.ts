import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsNumber()
  id: string;

  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  password: string;

  @IsString()
  salt: string;

  @IsString()
  confirmationToken: string;

  @IsString()
  recoverToken: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
