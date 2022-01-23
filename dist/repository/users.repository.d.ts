import { CreateUserDto } from './../users/dto/create-user.dto';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';
export declare class UserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findByUnique(data: Prisma.UserWhereUniqueInput): Promise<User | null>;
    create(createUserDto: CreateUserDto): Promise<User>;
    remove(id: number): Promise<User>;
    update(id: number, nickname: string): Promise<User>;
}
