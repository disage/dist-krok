import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {GroupService} from "./group.service";
import {CreateGroupDto} from "./dto/create-group.dto";
import {AddStudentsToGroupDto} from "./dto/add-students-to-group.dto";
import {Roles} from "../decorators/roles.decorator";
import {RolesGuard} from "../auth/Guards/roles.guard";

@Controller('/group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  @Post('create')
  async createGroup(@Body() dto: CreateGroupDto) {
    return await this.groupService.create(dto)
  }

  @Get(':id')
  async getGroup(@Param('id') id: string){
    return await this.groupService.findById(id)
  }

  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  @Delete(':id')
  async deleteGroup(@Param('id') id: string){
    return await this.groupService.delete(id)
  }

  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  @Get('all')
  async getAllGroups(){
    return await this.groupService.getAll()
  }

  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  @Patch('addStudent/:id')
  async addStudentToGroup(@Param('id') id: string, @Body() addStudentsDto: AddStudentsToGroupDto){
    return await this.groupService.addStudent(id, addStudentsDto)
  }

}
