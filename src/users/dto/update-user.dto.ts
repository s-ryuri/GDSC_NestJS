import {
  IsString,
  IsInt,
  IsNotEmpty,
  MaxLength,
  IsEmail,
  Max,
} from 'class-validator';
export class UpdateUserDto {
  //update 할 때 뭐가 필요?
  //유저 정보를 업데이트 함

  @IsNotEmpty()
  @IsString()
  nickname: string;
}
