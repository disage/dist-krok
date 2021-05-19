import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import { SubjectService } from "./subject.service";
import { CreateSubjectDto } from "./dto/create-subject.dto";
import {Roles} from "../decorators/roles.decorator";
import {RolesGuard} from "../auth/Guards/roles.guard";

@Controller('/subject')
export class SubjectController {

    constructor(private readonly subjectService: SubjectService ) {}

    @Get()
    @Roles('admin', 'teacher')
    @UseGuards(RolesGuard)
    getAllSubjects (){
        return this.subjectService.getAllSubjects();
    }

    @Post()
    @Roles('admin', 'teacher')
    @UseGuards(RolesGuard)
    createSubject(@Body() dto: CreateSubjectDto) {
        return this.subjectService.createSubject(dto);
    }

    @Delete(':id')
    @Roles('admin', 'teacher')
    @UseGuards(RolesGuard)
    deleteCourse (@Param('id') id: string) {
        return this.subjectService.deleteSubject(id);

    }
    @Get(':id')
    getSubjects (@Param('id') id: string){
        return this.subjectService.getSubjects(id);
    }
}
