import { UserRepository } from 'src/repository/users.repository';
import { JwtPayload } from './../auth/dto/auto.dto';
import { ArticleRepository } from 'src/repository/articles.repository';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesService {
    private articleRepository;
    private userRepository;
    constructor(articleRepository: ArticleRepository, userRepository: UserRepository);
    create(user: JwtPayload, createarticleDto: CreateArticleDto): Promise<import(".prisma/client").Article>;
    findAll(): Promise<import(".prisma/client").Article[]>;
    findOne(id: number): Promise<import(".prisma/client").Article>;
    update(user: JwtPayload, updatearticleDto: UpdateArticleDto): Promise<import(".prisma/client").Article>;
    remove(id: number): Promise<import(".prisma/client").Article>;
}
