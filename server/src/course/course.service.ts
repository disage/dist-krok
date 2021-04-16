import { Injectable } from "@nestjs/common";
import { CreateCourseDto } from "./dto/create-course.dto";
import {CourseModel} from "./course.model";
import {ModelType, DocumentType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "nestjs-typegoose";

@Injectable()
export class CourseService {

    constructor(@InjectModel(CourseModel) private courseModel: ModelType<CourseModel>) {}

    async createCourse (dto: CreateCourseDto): Promise<DocumentType<CourseModel>>  {
        return this.courseModel.create(dto);
    }

    async editCourse (dto: CreateCourseDto, id:string): Promise<DocumentType<CourseModel> | null>  {
        return this.courseModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }

    async deleteCourse (id: string): Promise<DocumentType<CourseModel> | null> {
        return this.courseModel.findByIdAndDelete(id).exec();
    }

    async getAllCourses(): Promise<DocumentType<CourseModel>[]>{
         return this.courseModel.find({},{name: 1, teacher: 1}).exec();
    }

    async getOneCourse (id: string): Promise<DocumentType<CourseModel>>{
       return this.courseModel.findById(id).exec();
    }
}
