import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePeriodDto, UpdatePeriodDto } from './dto/period.dto';

@Injectable()
export class PeriodService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePeriodDto) {
    return this.prisma.period.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.period.findMany({
      include: {
        lessons: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.period.findUnique({
      where: { id },
      include: {
        lessons: true,
      },
    });
  }

  async update(id: number, data: UpdatePeriodDto) {
    return this.prisma.period.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.period.delete({
      where: { id },
    });
  }
}
