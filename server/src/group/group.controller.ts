import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {GroupService} from "./group.service";
import {CreateGroupDto} from "./dto/create-group.dto";
import {AddStudentsToGroupDto} from "./dto/add-students-to-group.dto";

@Controller('/group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Post('create')
  async createGroup(@Body() dto: CreateGroupDto) {
    return await this.groupService.create(dto)
  }

  @Get(':id')
  async getGroup(@Param('id') id: string){
    return await this.groupService.findById(id)
  }
  @Delete(':id')
  async deleteGroup(@Param('id') id: string){
    return await this.groupService.delete(id)
  }

  @Get('all')
  async getAllGroups(){
    return await this.groupService.getAll()
  }

  @Patch('addStudent/:id')
  async addStudentToGroup(@Param('id') id: string, @Body() addStudentsDto: AddStudentsToGroupDto){
    return await this.groupService.addStudent(id, addStudentsDto)
  }

}
