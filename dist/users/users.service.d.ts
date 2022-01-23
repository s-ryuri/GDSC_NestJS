import { JwtPayload } from './../auth/dto/auto.dto';
import { UserRepository } from './../repository/users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UserRepository);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    findOne(id: number): Promise<import(".prisma/client").User>;
    update(user: JwtPayload, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: number): Promise<import(".prisma/client").User>;
}
