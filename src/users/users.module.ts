import { AuthModule } from './../auth/auth.module';
import { UserRepository } from './../repository/users.repository';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UserRepository],
})
export class UsersModule {}
