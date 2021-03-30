import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateMaterialDto } from "./dto/create-material.dto";
import { Material, MaterialDocument } from "./schema/material.schema";

@Injectable()
export class MaterialService {

    constructor(@InjectModel(Material.name) private courseModel: Model<MaterialDocument>) {}

    // async createCourse (dto: CreateCourseDto): Promise<Course>  {
    //     const course = await this.courseModel.create({...dto});
    //     return course;
    // }

    // async editCourse (dto: EditCourseDto, id:ObjectId): Promise<Course>  {
    //     const editedCourse = await this.courseModel.findByIdAndUpdate(id, dto, { new: true });
    //     return editedCourse;
    // }
    
    // async deleteCourse (id: ObjectId): Promise<ObjectId> {
    //     const course = await this.courseModel.findByIdAndDelete(id);
    //     return course._id;
    // }
    
    // async getAllCourses(): Promise<Course[]>{
    //      const courses = await this.courseModel.find({},{name: 1, teacher: 1});
    //      return courses;
    // }

    // async getOneCourse (id: ObjectId): Promise<Course>{
    //    const course = await this.courseModel.findById(id).select("-materialContent");
    //    return course; 
    // }
}