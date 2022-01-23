import { JwtPayload } from './../auth/dto/auto.dto';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(user: JwtPayload, createCommentDto: CreateCommentDto): Promise<import(".prisma/client").Comment>;
    findAll(): Promise<import(".prisma/client").Comment[]>;
    findOne(id: string): Promise<import(".prisma/client").Comment>;
    update(user: JwtPayload, updateCommentDto: UpdateCommentDto): Promise<import(".prisma/client").Comment>;
    remove(id: string): Promise<import(".prisma/client").Comment>;
}
