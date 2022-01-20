import { LocalAuthGuard } from './guard/local-auth.guard';
import { Controller, Get, Post, UseGuards, Request, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { GetUser } from 'src/decorator/get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //UserGuars안에 @nestjs/passport에서 가져온 AuthGuard()를 이용하면
  //validate에서 return한 user값이 @Req() res에 들어옴
  //요청안에 유저 정보를 넣어줄 수 있다.
  //미들웨어중 하나임
  //가드는 인증 미들웨어, 지정된 경로를 통과할 수 있는 사람과 허용되지 않는
  //사람을 서버에 알려준다.
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@GetUser() user) {
    //,@Request() req
    console.log('auth controller의 req.user', user);
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user) {
    //user 정보만 딱!
    console.log('user', user);
  }
}
