import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  async createLesson(data: Prisma.LessonCreateInput) {
    return this.prisma.lesson.create({
      data,
    });
  }

  async findAllLessons() {
    return this.prisma.lesson.findMany();
  }

  async findLessonById(id: number) {
    return this.prisma.lesson.findUnique({
      where: { id },
    });
  }

  async deleteLesson(id: number) {
    return this.prisma.lesson.delete({
      where: { id },
    });
  }
}
