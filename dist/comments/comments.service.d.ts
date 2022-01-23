import { JwtPayload } from './../auth/dto/auto.dto';
import { UserRepository } from 'src/repository/users.repository';
import { ArticleRepository } from 'src/repository/articles.repository';
import { CommentRepository } from 'src/repository/comments.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsService {
    private commentRepository;
    private articleRepository;
    private userRepository;
    constructor(commentRepository: CommentRepository, articleRepository: ArticleRepository, userRepository: UserRepository);
    create(user: JwtPayload, createCommentDto: CreateCommentDto): Promise<import(".prisma/client").Comment>;
    findAll(): Promise<import(".prisma/client").Comment[]>;
    findOne(id: number): Promise<import(".prisma/client").Comment>;
    update(user: JwtPayload, updateCommentDto: UpdateCommentDto): Promise<import(".prisma/client").Comment>;
    remove(id: number): Promise<import(".prisma/client").Comment>;
}
