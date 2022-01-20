// model Article{
//     id Int @default(autoincrement()) @id //기사의 아이디
//     title String @db.VarChar(60) //기사의 제목
//     content String @db.Text // 기사의 내용
//     post_time DateTime @default(now()) //포스트 한 시각
//     news_agency String @db.VarChar(10)
//     updated_at DateTime? @map("updated_at") // 업데이트 한 시각
//     like_num Int @default(0) //기사의 좋아요 수
//     comment_num Int @default(0) // 기사의 표면에 보이는 댓글 수
//     user User[] //기사에 좋아요른 누른 사람이 여러 명
//     comment Comment[] // 기사는 댓글을 여러 개 가질 수 있다.
//   }
import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  news_agency: string;
}
