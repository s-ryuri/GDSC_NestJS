import { JwtPayload } from './../auth/dto/auto.dto';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(user: JwtPayload, createArticleDto: CreateArticleDto): Promise<import(".prisma/client").Article>;
    findAll(): Promise<import(".prisma/client").Article[]>;
    findOne(id: string): Promise<import(".prisma/client").Article>;
    update(user: JwtPayload, updateArticleDto: UpdateArticleDto): Promise<import(".prisma/client").Article>;
    remove(id: string): Promise<import(".prisma/client").Article>;
}
