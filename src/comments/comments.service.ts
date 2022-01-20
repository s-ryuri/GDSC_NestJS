import { JwtPayload } from './../auth/dto/auto.dto';
import { UserRepository } from 'src/repository/users.repository';
import { ArticleRepository } from 'src/repository/articles.repository';
import { Injectable, HttpException } from '@nestjs/common';
import { CommentRepository } from 'src/repository/comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    private commentRepository: CommentRepository,
    private articleRepository: ArticleRepository,
    private userRepository: UserRepository,
  ) {}
  async create(user: JwtPayload, createCommentDto: CreateCommentDto) {
    const id = user.id;
    const { content, article_id } = createCommentDto;
    const foundUserId = await this.userRepository.findByUnique({ id });
    if (!foundUserId) {
      throw new HttpException('없는 유저 아이디', 400);
    }
    const foundArticleId = await this.articleRepository.findOne(article_id);
    if (!foundArticleId) {
      throw new HttpException('없는 게시판 아이디', 400);
    }
    return await this.commentRepository.create(id, createCommentDto);
  }

  async findAll() {
    return this.commentRepository.findAll();
  }
  async findOne(id: number) {
    return await this.commentRepository.findById(id);
  }
  async update(user: JwtPayload, updateCommentDto: UpdateCommentDto) {
    const id = user.id;
    const { content, article_id } = updateCommentDto;
    //댓글이 없을 때

    const foundArticleid = this.articleRepository.findOne(article_id);

    if (!foundArticleid) {
      throw new HttpException(`there is article_id no ${id}`, 400);
    }
    const foundId = this.commentRepository.findById(id);
    if (!foundId) {
      throw new HttpException(`there is comment_id no ${id}`, 400);
    }

    return await this.commentRepository.update(id, content);
  }

  async remove(id: number) {
    const foundId = this.commentRepository.findById(id);
    if (!foundId) {
      throw new HttpException(`there is no ${id}`, 400);
    }
    return await this.commentRepository.remove(id);
  }
}
