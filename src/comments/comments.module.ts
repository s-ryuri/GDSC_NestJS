import { UserRepository } from 'src/repository/users.repository';
import { ArticleRepository } from 'src/repository/articles.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { CommentRepository } from 'src/repository/comments.repository';
import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';

@Module({
  controllers: [CommentsController],
  providers: [
    CommentsService,
    CommentRepository,
    PrismaService,
    ArticleRepository,
    UserRepository,
  ],
})
export class CommentsModule {}
