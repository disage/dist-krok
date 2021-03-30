import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { SubjectService } from "./subject.service";
import { CreateSubjectDto } from "./dto/create-subject.dto";

@Controller('/subject')
export class SubjectController {

    constructor(private materialService: SubjectService ) {}
    // @Post()
    //  createCourse(@Body() dto: CreateCourseDto) {
    //      return this.courseService.createCourse(dto);
    // }
    // @Put(':id')
    // editCourse(@Body() dto: EditCourseDto, @Param('id') id: ObjectId){
    //     return this.courseService.editCourse(dto, id);
    // }
    // @Delete(':id')
    //  deleteCourse (@Param('id') id: ObjectId) {
    //     return this.courseService.deleteCourse(id);

    // }
    // @Get()
    //  getAllCourses (){
    //     return this.courseService.getAllCourses();
    // }
    // @Get(':id')
    // getOneCourse (@Param('id') id: ObjectId){
    //     return this.courseService.getOneCourse(id);
    // }
}