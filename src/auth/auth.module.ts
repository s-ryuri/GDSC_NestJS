import { UsersModule } from './../users/users.module';
import { AuthController } from './auth.controller';
import { PrismaModule } from './../prisma/prisma.module';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { jwtConstants } from './constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRepository } from 'src/repository/users.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
//.register({ defaultStrategy: 'jwt' }),
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    PrismaModule,
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    UserRepository,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
