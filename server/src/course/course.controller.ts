import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { CourseService } from "./course.service";
import { CreateCourseDto, EditCourseDto } from "./dto/create-course.dto";

@Controller('/courses')
export class CoursesController {

    constructor(private courseService: CourseService ) {}
    @Post()
     createCourse(@Body() dto: CreateCourseDto) {
         return this.courseService.createCourse(dto);
    }
    @Put(':id')
    editCourse(@Body() dto: EditCourseDto, @Param('id') id: ObjectId){
        return this.courseService.editCourse(dto, id);
    }
    @Delete(':id')
     deleteCourse (@Param('id') id: ObjectId) {
        return this.courseService.deleteCourse(id);

    }
    @Get()
     getAllCourses (){
        return this.courseService.getAllCourses();
    }
    @Get(':id')
    getOneCourse (@Param('id') id: ObjectId){
        return this.courseService.getOneCourse(id);
    }
}