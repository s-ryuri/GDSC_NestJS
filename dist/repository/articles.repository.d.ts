import { PrismaService } from './../prisma/prisma.service';
import { CreateArticleDto } from 'src/articles/dto/create-article.dto';
import { UpdateArticleDto } from 'src/articles/dto/update-article.dto';
export declare class ArticleRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(id: number, createArticleDto: CreateArticleDto): Promise<import(".prisma/client").Article>;
    findAll(): Promise<import(".prisma/client").Article[]>;
    findOne(id: number): Promise<import(".prisma/client").Article>;
    update(updateArticleDto: UpdateArticleDto): Promise<import(".prisma/client").Article>;
    remove(id: number): Promise<import(".prisma/client").Article>;
}
