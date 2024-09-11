import { ApiProperty } from "@nestjs/swagger";

export class CreateLessonDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    urlVideo: string;
    @ApiProperty()
    urlPic: string;
    @ApiProperty()
    urlPowerPonit?: string;
    @ApiProperty()
    periodId: number;
    
  }
  
  export class UpdateLessonDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    urlVideo: string;
    @ApiProperty()
    urlPowerPoint: string;
    @ApiProperty()
    urlPic: string;
    @ApiProperty()
    periodId: number;
  }
  