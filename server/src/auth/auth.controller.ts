//src/auth/auth.controller.ts

import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('apiKey') //logo cadna
  @Get('/getme')
  findMe(@Request() req: any) {    
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity('apiKey') //logo cadna
  @Patch('update')
  async updateProfile(@Request() req: any, @Body() updateAuthDto: UpdateAuthDto) {
    const token = req.headers.authorization.split(' ')[1];
    return this.authService.update(token, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}