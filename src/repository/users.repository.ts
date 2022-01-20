import { JwtPayload } from './../auth/dto/auto.dto';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { UpdateUserDto } from './../users/dto/update-user.dto';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findByUnique(data: Prisma.UserWhereUniqueInput): Promise<User | null> {
    //유니크한 값으로 데이터들을 찾아줌
    //email, tel, nickname
    return await this.prisma.user.findUnique({
      where: data,
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, email, tel, nickname } = createUserDto;
    return await this.prisma.user.create({
      data: {
        password,
        email,
        tel,
        nickname,
      },
    });
  }

  async remove(id: number): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async update(id: number, nickname: string): Promise<User> {
    //id는 인증에서 얻은 아이디
    //nickname은 유저가 직접 입력한 아이디
    console.log('============repository의 update의 id : ', id);
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        nickname,
      },
    });
  }
}
