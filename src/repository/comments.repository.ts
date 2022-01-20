import { PrismaService } from './../prisma/prisma.service';
import { Injectable, Delete } from '@nestjs/common';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';
import { UpdateCommentDto } from 'src/comments/dto/update-comment.dto';

@Injectable()
export class CommentRepository {
  constructor(private prisma: PrismaService) {}

  async create(id: number, createCommentDto: CreateCommentDto) {
    const user_id = id;
    const { content, article_id } = createCommentDto;

    return await this.prisma.comment.create({
      data: {
        content,
        user_id,
        article_id,
      },
    });
  }

  async findById(id: number) {
    //여기서 아이디를 찾아주는건 id, userid, boardid 다 찾아주는건가?
    return await this.prisma.comment.findUnique({
      where: {
        id,
      },
    });
  }
  async findAll() {
    return await this.prisma.comment.findMany();
  }

  async update(id: number, content: string) {
    return await this.prisma.comment.update({
      where: {
        id,
      },
      data: {
        content,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.comment.delete({
      where: {
        id,
      },
    });
  }
}
