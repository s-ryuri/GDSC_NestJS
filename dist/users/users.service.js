"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const users_repository_1 = require("./../repository/users.repository");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        const { password, email, tel, nickname } = createUserDto;
        const foundEmail = await this.userRepository.findByUnique({ email });
        if (foundEmail) {
            console.log('foundemail', foundEmail);
            throw new common_1.HttpException(`duplicated ${email}`, 400);
        }
        const foundTel = await this.userRepository.findByUnique({ tel });
        if (foundTel) {
            throw new common_1.HttpException(`duplicated ${tel}`, 400);
        }
        const foundNickname = await this.userRepository.findByUnique({ nickname });
        if (foundNickname) {
            throw new common_1.HttpException(`duplicated ${nickname}`, 400);
        }
        try {
            createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
            const createUser = await this.userRepository.create(createUserDto);
            delete createUser.password;
            delete createUser.tel;
            return createUser;
        }
        catch (err) {
            console.error(err);
            throw new common_1.HttpException('error', 500);
        }
    }
    async findOne(id) {
        const findId = await this.userRepository.findByUnique({ id });
        if (!findId) {
            throw new common_1.HttpException(`there is no ${id}`, 400);
        }
        delete findId.password;
        delete findId.tel;
        return findId;
    }
    async update(user, updateUserDto) {
        const id = user.id;
        console.log('=======service의 update id========', id);
        const { nickname } = updateUserDto;
        const foundId = await this.userRepository.findByUnique({ id: id });
        console.log('=======foundid543========', foundId);
        if (!foundId) {
            throw new common_1.HttpException(`there is no ${id}`, 400);
        }
        const foundNickname = await this.userRepository.findByUnique({ nickname });
        if (foundNickname) {
            throw new common_1.HttpException(`duplicated ${nickname}`, 400);
        }
        try {
            const updateUser = await this.userRepository.update(id, nickname);
            delete updateUser.password;
            delete updateUser.tel;
            return updateUser;
        }
        catch (err) {
            console.log(err);
            throw new common_1.HttpException('there is err', 500);
        }
    }
    async remove(id) {
        const foundId = await this.userRepository.findByUnique({ id });
        if (!foundId) {
            throw new common_1.HttpException(`there is no ${id}`, 400);
        }
        return await this.userRepository.remove(id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UserRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map