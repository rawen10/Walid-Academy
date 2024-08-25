import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@Controller('lessons')
@ApiTags('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post()
  create(@Body() createLessonDto: Prisma.LessonCreateInput) {
    return this.lessonService.createLesson(createLessonDto);
  }

  @Get()
  findAll() {
    return this.lessonService.findAllLessons();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonService.findLessonById(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonService.deleteLesson(+id);
  }
}
