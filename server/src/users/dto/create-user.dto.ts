import { IsEmail, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
export class CreateUsersDto {
  @IsEmail()
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  prenom: string;
  @ApiProperty()
  nom: string;
  @ApiProperty()
  telephone: string;
  @ApiProperty()
  lieux: string;
  @ApiProperty()
  classe: string;
  @ApiProperty()
  @IsEnum(UserRole, { message: 'Role must be either Admin or Student' })
  role: UserRole;
 
}
