//src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: 'sfectoria',
      signOptions: { expiresIn: '60m' }, // e.g. 30s, 7d, 24h
    }),
    UsersModule

  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,UsersService],
})
export class AuthModule {}