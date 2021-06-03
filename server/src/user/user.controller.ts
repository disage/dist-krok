import {BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {roleEnum} from "./enums/role.enum";
import {Roles} from "../decorators/roles.decorator";
import {RolesGuard} from "../auth/Guards/roles.guard";

@Controller('user')
@Roles('admin')
@UseGuards(RolesGuard)
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Post('create')
  async createUser(@Body() dto: CreateUserDto, roles: string = roleEnum.user) {
    return await this.userService.create(dto, roles);
  }

  @Post('updateRole/:id')
  async updateRole(@Param('id') id: string, @Body('role') role: string)  {
    return await this.userService.updateRole(id, role);
  }

  @Put(':id')
  async edit(@Body() dto: CreateUserDto, @Param('id') id: string) {
    return await this.userService.edit(dto, id);
  }

  @Delete(':id')
  async deleteCourse(@Param('id') id: string) {
    return await this.userService.delete(id);
  }

  @Get('all')
  async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.userService.findById(id);
  }

  @Post('/findByEmail')
  async findByEmail(@Body('email') email: string) {
    return await this.userService.findByEmail(email);
  }

  @Get('get/myprofile')
  async getMyProfile(@Request() req){
    return await this.userService.getMyProfile(req);
  }

}
