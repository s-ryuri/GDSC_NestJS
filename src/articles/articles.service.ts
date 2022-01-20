import { UserRepository } from 'src/repository/users.repository';
import { JwtPayload } from './../auth/dto/auto.dto';
import { Injectable, HttpException } from '@nestjs/common';
import { ArticleRepository } from 'src/repository/articles.repository';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    private articleRepository: ArticleRepository,
    private userRepository: UserRepository,
  ) {}

  async create(user: JwtPayload, createarticleDto: CreateArticleDto) {
    const id = user.id;
    const foundId = this.articleRepository.findOne(id);
    if (!foundId) {
      throw new HttpException(`there is no id : ${id}`, 400);
    }
    return await this.articleRepository.create(id, createarticleDto);
  }

  async findAll() {
    return await this.articleRepository.findAll();
  }

  async findOne(id: number) {
    //게시글 아이디로 찾으니까
    const articleFound = this.articleRepository.findOne(id);
    if (!articleFound) {
      throw new HttpException(`there is no ${id}`, 400);
    }

    return articleFound;
  }

  async update(user: JwtPayload, updatearticleDto: UpdateArticleDto) {
    const foundUserId = await this.userRepository.findByUnique({ id: user.id }); //유저가 없으면 안됨
    if (!foundUserId) {
      throw new HttpException(`there is no ${foundUserId}`, 400);
    }
    const foundArticleId = await this.articleRepository.findOne(
      updatearticleDto.id,
    );
    if (!foundArticleId) {
      throw new HttpException(`there is no ${updatearticleDto.id}`, 400);
    }
    return await this.articleRepository.update(updatearticleDto);
  }

  async remove(id: number) {
    return await this.articleRepository.remove(id);
  }
}
