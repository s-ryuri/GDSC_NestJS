import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class JwtPayload {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  nickname: string;
}
