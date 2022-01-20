import {
  IsString,
  IsInt,
  IsNotEmpty,
  MaxLength,
  IsEmail,
  Max,
} from 'class-validator';
export class UpdateArticleDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  title?: string;

  @IsString()
  @IsNotEmpty()
  content?: string;
  //작성자와 수정자가 누군지
  //
  //어디 계층과 어디 계층이 이어지나
  //계층의 개념 ,controller, service, repository
}
