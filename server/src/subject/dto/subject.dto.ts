import { ApiProperty } from "@nestjs/swagger";

export class CreateSubjectDto {
    @ApiProperty()
    name: string;
}

export class UpdateSubjectDto {
    @ApiProperty()
    name: string;
}
