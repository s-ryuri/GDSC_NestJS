import { JwtPayload } from './../auth/dto/auto.dto';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { GetUser } from 'src/decorator/get-user.decorator';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @GetUser() user: JwtPayload,
    @Body() createArticleDto: CreateArticleDto,
  ) {
    return this.articlesService.create(user, createArticleDto);
  }

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Patch('/')
  @UseGuards(JwtAuthGuard)
  update(
    @GetUser() user: JwtPayload,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.update(user, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
