import { ApiProperty } from "@nestjs/swagger";

export class CreateLessonDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    content: string;
    @ApiProperty()
    periodId: number;
  }
  
  export class UpdateLessonDto {
    @ApiProperty()
    title?: string;
    @ApiProperty()
    content?: string;
    @ApiProperty()
    periodId?: number;
  }
  