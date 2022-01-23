import { PrismaService } from './../prisma/prisma.service';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';
export declare class CommentRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(id: number, createCommentDto: CreateCommentDto): Promise<import(".prisma/client").Comment>;
    findById(id: number): Promise<import(".prisma/client").Comment>;
    findAll(): Promise<import(".prisma/client").Comment[]>;
    update(id: number, content: string): Promise<import(".prisma/client").Comment>;
    remove(id: number): Promise<import(".prisma/client").Comment>;
}
