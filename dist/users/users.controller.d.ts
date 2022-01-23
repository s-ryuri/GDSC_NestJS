import { JwtPayload } from './../auth/dto/auto.dto';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    findOne(id: string): Promise<import(".prisma/client").User>;
    logout(): string;
    update(user: JwtPayload, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: string): Promise<import(".prisma/client").User>;
}
