import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {CourseService} from "./course.service";
import {CreateCourseDto} from "./dto/create-course.dto";
import {RolesGuard} from "../auth/Guards/roles.guard";
import {Roles} from "../decorators/roles.decorator";

@Controller('/courses')
export class CoursesController {

  constructor(private readonly courseService: CourseService) {
  }

  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  @Post('create')
  async createCourse(@Body() dto: CreateCourseDto) {
    return await this.courseService.createCourse(dto);
  }

  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  @Put(':id')
  async editCourse(@Body() dto: CreateCourseDto, @Param('id') id: string) {
    return await this.courseService.editCourse(dto, id);
  }

  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  @Delete(':id')
  async deleteCourse(@Param('id') id: string) {
    return await this.courseService.deleteCourse(id);
  }

  @Get()
  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  async getAllCourses() {
    return await this.courseService.getAllCourses();
  }

  @Get(':id')
  async getOneCourse(@Param('id') id: string) {
    return await this.courseService.getOneCourse(id);
  }
}
