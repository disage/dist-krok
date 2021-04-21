import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SubjectService } from "./subject.service";
import { CreateSubjectDto } from "./dto/create-subject.dto";

@Controller('/subject')
export class SubjectController {

    constructor(private readonly subjectService: SubjectService ) {}

    @Get()
    getAllSubjects (){
        return this.subjectService.getAllSubjects();
    }

    @Post()
    createSubject(@Body() dto: CreateSubjectDto) {
        return this.subjectService.createSubject(dto);
    }

    @Delete(':id')
    deleteCourse (@Param('id') id: string) {
        return this.subjectService.deleteSubject(id);

    }
    @Get(':id')
    getSubjects (@Param('id') id: string){
        return this.subjectService.getSubjects(id);
    }
}
