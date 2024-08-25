import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  ForbiddenException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from './roles.guards';
import { Roles } from './roles.decorator';

@Controller('users')
@ApiTags('users') //bich ta3tih el essm fel swagegr
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('AddUser') // Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  async create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }

  @ApiSecurity('apiKey') //logo cadna
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Admin')
  @Get('AllUsers')
  findAll() {
    return this.usersService.findAll();
  }

  @ApiSecurity('apiKey') //logo cadna
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Admin')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  @ApiSecurity('apiKey') //logo cadna
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Admin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // Only ADMIN can access this endpoint  //d'après ton role t'as accés ou pas
  @ApiSecurity('apiKey') //logo cadna
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Admin')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
