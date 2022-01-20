import { UserRepository } from './../repository/users.repository';
import { Injectable, HttpException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(userEmail: string, password: string): Promise<any> {
    //로그인 기능임
    const findUser = await this.userRepository.findByUnique({
      email: userEmail,
    });
    if (findUser && (await bcrypt.compare(password, findUser.password))) {
      const { password, tel, ...result } = findUser;
      return result;
    } else {
      throw new HttpException('로그인 실패.', 400);
    }
  }

  async login(user: any) {
    const payload = { nickname: user.nickname, id: user.id }; //닉네임을 넣어줘서 payload
    console.log('payload23 : ', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
