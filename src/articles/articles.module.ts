import { PrismaService } from 'src/prisma/prisma.service';
import { ArticleRepository } from './../repository/articles.repository';
import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, ArticleRepository, PrismaService],
})
export class ArticlesModule {}
