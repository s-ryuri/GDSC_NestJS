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
exports.CommentsService = void 0;
const users_repository_1 = require("../repository/users.repository");
const articles_repository_1 = require("../repository/articles.repository");
const common_1 = require("@nestjs/common");
const comments_repository_1 = require("../repository/comments.repository");
let CommentsService = class CommentsService {
    constructor(commentRepository, articleRepository, userRepository) {
        this.commentRepository = commentRepository;
        this.articleRepository = articleRepository;
        this.userRepository = userRepository;
    }
    async create(user, createCommentDto) {
        const id = user.id;
        const { content, article_id } = createCommentDto;
        const foundUserId = await this.userRepository.findByUnique({ id });
        if (!foundUserId) {
            throw new common_1.HttpException('없는 유저 아이디', 400);
        }
        const foundArticleId = await this.articleRepository.findOne(article_id);
        if (!foundArticleId) {
            throw new common_1.HttpException('없는 게시판 아이디', 400);
        }
        return await this.commentRepository.create(id, createCommentDto);
    }
    async findAll() {
        return this.commentRepository.findAll();
    }
    async findOne(id) {
        return await this.commentRepository.findById(id);
    }
    async update(user, updateCommentDto) {
        const id = user.id;
        const { content, article_id } = updateCommentDto;
        const foundArticleid = this.articleRepository.findOne(article_id);
        if (!foundArticleid) {
            throw new common_1.HttpException(`there is article_id no ${id}`, 400);
        }
        const foundId = this.commentRepository.findById(id);
        if (!foundId) {
            throw new common_1.HttpException(`there is comment_id no ${id}`, 400);
        }
        return await this.commentRepository.update(id, content);
    }
    async remove(id) {
        const foundId = this.commentRepository.findById(id);
        if (!foundId) {
            throw new common_1.HttpException(`there is no ${id}`, 400);
        }
        return await this.commentRepository.remove(id);
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [comments_repository_1.CommentRepository,
        articles_repository_1.ArticleRepository,
        users_repository_1.UserRepository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map