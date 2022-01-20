import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from 'src/articles/dto/create-article.dto';
import { UpdateArticleDto } from 'src/articles/dto/update-article.dto';

@Injectable()
export class ArticleRepository {
  constructor(private prisma: PrismaService) {}

  async create(id: number, createArticleDto: CreateArticleDto) {
    const user_id = id;
    const { title, content, news_agency } = createArticleDto;

    return await this.prisma.article.create({
      data: {
        title,
        content,
        news_agency,
        user_id,
      },
    });
  }

  async findAll() {
    return await this.prisma.article.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.article.findUnique({
      where: {
        id,
      },
    });
  }

  async update(updateArticleDto: UpdateArticleDto) {
    const { id, title, content } = updateArticleDto;
    return await this.prisma.article.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        updated_at: new Date(),
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.article.delete({
      where: {
        id,
      },
    });
  }
}
