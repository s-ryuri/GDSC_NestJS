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
exports.CommentRepository = void 0;
const prisma_service_1 = require("./../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let CommentRepository = class CommentRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(id, createCommentDto) {
        const user_id = id;
        const { content, article_id } = createCommentDto;
        return await this.prisma.comment.create({
            data: {
                content,
                user_id,
                article_id,
            },
        });
    }
    async findById(id) {
        return await this.prisma.comment.findUnique({
            where: {
                id,
            },
        });
    }
    async findAll() {
        return await this.prisma.comment.findMany();
    }
    async update(id, content) {
        return await this.prisma.comment.update({
            where: {
                id,
            },
            data: {
                content,
            },
        });
    }
    async remove(id) {
        return await this.prisma.comment.delete({
            where: {
                id,
            },
        });
    }
};
CommentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentRepository);
exports.CommentRepository = CommentRepository;
//# sourceMappingURL=comments.repository.js.map