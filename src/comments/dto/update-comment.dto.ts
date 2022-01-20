import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class UpdateCommentDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsInt()
  @IsNotEmpty()
  article_id: number;
}
