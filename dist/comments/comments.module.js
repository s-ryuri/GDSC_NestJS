"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const users_repository_1 = require("../repository/users.repository");
const articles_repository_1 = require("../repository/articles.repository");
const prisma_service_1 = require("../prisma/prisma.service");
const comments_repository_1 = require("../repository/comments.repository");
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const comments_controller_1 = require("./comments.controller");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [comments_controller_1.CommentsController],
        providers: [
            comments_service_1.CommentsService,
            comments_repository_1.CommentRepository,
            prisma_service_1.PrismaService,
            articles_repository_1.ArticleRepository,
            users_repository_1.UserRepository,
        ],
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map