import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLessonDto } from './dto/lesson.dto';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  async createLesson(data: CreateLessonDto) {
    const { title, urlVideo, urlPic, urlPowerPonit, periodId } = data;

    return this.prisma.lesson.create({
      data: {
        title,
        urlVideo,
        urlPic,
        urlPowerPonit,
        period: {
          connect: { id: periodId }, // Connect the Lesson to the Period by periodId
        },
      },
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
