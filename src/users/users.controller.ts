import { JwtPayload } from './../auth/dto/auto.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './../auth/guard/jwt-auth.guard';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUser } from 'src/decorator/get-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get('/logout')
  @Redirect()
  logout() {
    return '로그아웃 됐습니다.';
  }

  @Patch('/')
  //여기에만 먹힘
  @UseGuards(JwtAuthGuard)
  update(@GetUser() user: JwtPayload, @Body() updateUserDto: UpdateUserDto) {
    //이걸 넣아줘야
    //user가 입력한 닉네임으로 바꿀 수 있음
    return this.usersService.update(user, updateUserDto); //, updateUserDto
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
