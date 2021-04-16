import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {CourseService} from "./course.service";
import {CreateCourseDto} from "./dto/create-course.dto";

@Controller('/courses')
export class CoursesController {

  constructor(private readonly courseService: CourseService) {
  }

  @Post('create')
  async createCourse(@Body() dto: CreateCourseDto) {
    return await this.courseService.createCourse(dto);
  }

  @Put(':id')
  async editCourse(@Body() dto: CreateCourseDto, @Param('id') id: string) {
    return await this.courseService.editCourse(dto, id);
  }

  @Delete(':id')
  async deleteCourse(@Param('id') id: string) {
    return await this.courseService.deleteCourse(id);
  }

  @Get()
  async getAllCourses() {
    return await this.courseService.getAllCourses();
  }

  @Get(':id')
  async getOneCourse(@Param('id') id: string) {
    return await this.courseService.getOneCourse(id);
  }
}
