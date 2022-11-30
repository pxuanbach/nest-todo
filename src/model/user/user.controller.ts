import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('users')
@ApiTags("users")
export class UserController {
  constructor(private readonly UserService: UserService) { }

  @Get()
  async getAllPeople(): Promise<User[]> {
    return this.UserService.getAll();
  }

  @Get(':id')
  async getUserById(@Param('id', ParseUUIDPipe) id: string): Promise<User> {
    return this.UserService.getById(id);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.UserService.create(createUserDto);
  }

  @Put(':id')
  async updateUser(@Param('id', ParseUUIDPipe) id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.UserService.update(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.UserService.delete(id);
  }
}
