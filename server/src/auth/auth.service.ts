import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(dto: CreateAuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) {
      throw new HttpException('Invalid email', HttpStatus.BAD_REQUEST);
    }

    const validPassword = await bcrypt.compare(dto.password, user.password);
    if (!validPassword) {
      throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
    }

    // Step 3: Generate a JWT and return it
    const { password, ...rest } = user;
    const token = await this.jwtService.signAsync(rest);
    return token;
  }

  async findMe(token: string) {
    return await this.jwtService.decode(token);
  }

  async update(token: string, updateAuthDto: UpdateAuthDto) {
    // Decode the token to get the user ID
    const decodedToken: any = this.jwtService.decode(token);

    if (!decodedToken || !decodedToken.id) {
      throw new Error('Invalid or expired token');
    }

    const userId = decodedToken.id;
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if (updateAuthDto.password) {
      const salt = await bcrypt.genSalt();
      updateAuthDto.password = await bcrypt.hash(updateAuthDto.password, salt);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: updateAuthDto,
    });

    const { password, ...rest } = updatedUser;
    return rest;
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
