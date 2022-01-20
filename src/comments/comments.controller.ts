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
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { GetUser } from 'src/decorator/get-user.decorator';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @GetUser() user: JwtPayload,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentsService.create(user, createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Patch('/')
  @UseGuards(JwtAuthGuard)
  update(
    @GetUser() user: JwtPayload,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentsService.update(user, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
