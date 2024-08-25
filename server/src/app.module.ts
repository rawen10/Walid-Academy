import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SubjectModule } from './subject/subject.module';
import { PeriodModule } from './period/period.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, SubjectModule, PeriodModule, LessonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
