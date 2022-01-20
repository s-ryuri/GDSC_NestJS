import {
  IsString,
  IsInt,
  IsNotEmpty,
  MaxLength,
  IsEmail,
  Max,
} from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  nickname: string;
  
  @IsNotEmpty()
  @IsString()
  tel: string;

  
}
