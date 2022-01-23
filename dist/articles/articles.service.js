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
exports.ArticlesService = void 0;
const users_repository_1 = require("../repository/users.repository");
const common_1 = require("@nestjs/common");
const articles_repository_1 = require("../repository/articles.repository");
let ArticlesService = class ArticlesService {
    constructor(articleRepository, userRepository) {
        this.articleRepository = articleRepository;
        this.userRepository = userRepository;
    }
    async create(user, createarticleDto) {
        const id = user.id;
        const foundId = this.articleRepository.findOne(id);
        if (!foundId) {
            throw new common_1.HttpException(`there is no id : ${id}`, 400);
        }
        return await this.articleRepository.create(id, createarticleDto);
    }
    async findAll() {
        return await this.articleRepository.findAll();
    }
    async findOne(id) {
        const articleFound = this.articleRepository.findOne(id);
        if (!articleFound) {
            throw new common_1.HttpException(`there is no ${id}`, 400);
        }
        return articleFound;
    }
    async update(user, updatearticleDto) {
        const foundUserId = await this.userRepository.findByUnique({ id: user.id });
        if (!foundUserId) {
            throw new common_1.HttpException(`there is no ${foundUserId}`, 400);
        }
        const foundArticleId = await this.articleRepository.findOne(updatearticleDto.id);
        if (!foundArticleId) {
            throw new common_1.HttpException(`there is no ${updatearticleDto.id}`, 400);
        }
        return await this.articleRepository.update(updatearticleDto);
    }
    async remove(id) {
        return await this.articleRepository.remove(id);
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [articles_repository_1.ArticleRepository,
        users_repository_1.UserRepository])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map