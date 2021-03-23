import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateCourseDto } from "./dto/create-course.dto";
import { Course, CourseDocument } from "./schema/course.schema";

@Injectable()
export class CourseService {

    constructor(@InjectModel(Course.name) private courseModel: Model<CourseDocument>) {}

    async createCourse (dto: CreateCourseDto): Promise<Course>  {
        const course = await this.courseModel.create({...dto});
        return course;
    }

    async editCourse (dto: CreateCourseDto, id:ObjectId): Promise<Course>  {
        const editedCourse = await this.courseModel.findByIdAndUpdate(id, dto, { new: true });
        return editedCourse;
    }
    
    async deleteCourse (id: ObjectId): Promise<ObjectId> {
        const course = await this.courseModel.findByIdAndDelete(id);
        return course._id;
    }
    
    async getAllCourses(): Promise<Course[]>{
         const courses = await this.courseModel.find({},{name: 1, teacher: 1});
         return courses;
    }
    async getOneCourse (id: ObjectId): Promise<Course>{
        const course = await this.courseModel.findById(id);
        return course; 
    }
}