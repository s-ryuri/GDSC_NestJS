import { JwtPayload } from './../auth/dto/auto.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './../repository/users.repository';
import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const { password, email, tel, nickname } = createUserDto;

    const foundEmail = await this.userRepository.findByUnique({ email });
    if (foundEmail) {
      //존재하니까 이메일 중복
      console.log('foundemail', foundEmail);

      throw new HttpException(`duplicated ${email}`, 400);
    }

    const foundTel = await this.userRepository.findByUnique({ tel });
    if (foundTel) {
      //존재하니까 전화번호 중복
      throw new HttpException(`duplicated ${tel}`, 400);
    }
    const foundNickname = await this.userRepository.findByUnique({ nickname });
    if (foundNickname) {
      //존재하니까 닉네임 중복
      throw new HttpException(`duplicated ${nickname}`, 400);
    }

    try {
      createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
      const createUser = await this.userRepository.create(createUserDto);
      delete createUser.password;
      delete createUser.tel;
      return createUser;
    } catch (err) {
      console.error(err);
      throw new HttpException('error', 500);
    }
  }

  async findOne(id: number) {
    //read
    const findId = await this.userRepository.findByUnique({ id });
    if (!findId) {
      throw new HttpException(`there is no ${id}`, 400);
    }
    delete findId.password;
    delete findId.tel;
    return findId;
  }

  async update(user: JwtPayload, updateUserDto: UpdateUserDto) {
    //update
    //지금 들어가있는 아이디와 닉네임 수정하기 버튼을 누른 사람과 같다?
    const id: number = user.id; //인증에서 나온 id
    console.log('=======service의 update id========', id);
    const { nickname } = updateUserDto; //유저가 입력한 닉네임

    const foundId = await this.userRepository.findByUnique({ id: id });
    console.log('=======foundid543========', foundId);
    if (!foundId) {
      //아이디가 없으면 뭔가 잘못된 오류
      throw new HttpException(`there is no ${id}`, 400);
    }

    const foundNickname = await this.userRepository.findByUnique({ nickname });
    if (foundNickname) {
      //존재하니까 닉네임 중복
      throw new HttpException(`duplicated ${nickname}`, 400);
    }

    try {
      const updateUser = await this.userRepository.update(id, nickname);
      delete updateUser.password;
      delete updateUser.tel;
      return updateUser;
    } catch (err) {
      console.log(err);
      throw new HttpException('there is err', 500);
    }
  }

  async remove(id: number) {
    //delete
    const foundId = await this.userRepository.findByUnique({ id });

    if (!foundId) {
      //아이디가 없으면 뭔가 잘못된 오류
      throw new HttpException(`there is no ${id}`, 400);
    }
    return await this.userRepository.remove(id);
  }
}
