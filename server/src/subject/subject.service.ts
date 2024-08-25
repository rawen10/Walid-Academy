import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubjectDto, UpdateSubjectDto } from './dto/subject.dto';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSubjectDto) {
    return this.prisma.subject.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.subject.findMany({
      include: {
        periods: {
          include: {
            lessons: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.subject.findUnique({
      where: { id },
      include: {
        periods: {
          include: {
            lessons: true,
          },
        },
      },
    });
  }

  async update(id: number, data: UpdateSubjectDto) {
    return this.prisma.subject.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.subject.delete({
      where: { id },
    });
  }
}
