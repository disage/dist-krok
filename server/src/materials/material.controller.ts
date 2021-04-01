import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { MaterialService } from "./material.service";
import { CreateMaterialDto } from "./dto/create-material.dto";

@Controller('/material')
export class MaterialController {

    constructor(private materialService: MaterialService ) {}
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