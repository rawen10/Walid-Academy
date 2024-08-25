import { Module } from '@nestjs/common';
import { PeriodService } from './period.service';
import { PeriodController } from './period.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PeriodController],
  providers: [PeriodService],
  imports:[PrismaModule],
})
export class PeriodModule {}
