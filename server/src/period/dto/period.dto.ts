import { ApiProperty } from "@nestjs/swagger";

export class CreatePeriodDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    subjectId: number;
  }
  
  export class UpdatePeriodDto {
    @ApiProperty()
    name?: string;
    @ApiProperty()
    subjectId?: number;
  }
  