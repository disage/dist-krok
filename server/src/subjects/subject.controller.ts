import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { SubjectService } from "./subject.service";
import { CreateSubjectDto } from "./dto/create-subject.dto";

@Controller('/subjects')
export class SubjectController {

    constructor(private subjectService: SubjectService ) {}


//     @Get(':id')
//     getSubjects (@Param('id') id: ObjectId){
//        return this.subjectService.getSubjects(id);
//    }
    @Get()
    getAllSubjects (){
        return this.subjectService.getAllSubjects();
    }

    @Post()
    createSubject(@Body() dto: CreateSubjectDto) {
        return this.subjectService.createSubject(dto);
    }

    @Delete(':id')
    deleteCourse (@Param('id') id: ObjectId) {
        return this.subjectService.deleteSubject(id);

    }
    @Get(':id')
    getSubjects (@Param('id') id: any){
        return this.subjectService.getSubjects(id);
    }

    // @Put(':id')
    // editCourse(@Body() dto: EditCourseDto, @Param('id') id: ObjectId){
    //     return this.courseService.editCourse(dto, id);
    // }



}