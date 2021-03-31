import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
// import { Model, ObjectId } from "mongoose";
import * as mongoose from  'mongoose';
import { CreateSubjectDto } from "./dto/create-subject.dto";
import { Subject, SubjectDocument } from "./schema/subject.schema";

@Injectable()
export class SubjectService {

    constructor(@InjectModel(Subject.name) private subjectModel: mongoose.Model<SubjectDocument>) {}

    async getAllSubjects(): Promise<Subject[]>{
        const subject = await this.subjectModel.find();
        return subject;
    }
    async getSubjects(id: any): Promise<Subject[]>{
        const subject = await this.subjectModel.find({'courseId': id});
        return subject;
    }

    async createSubject(dto: CreateSubjectDto): Promise<Subject>{
        const subject = await this.subjectModel.create({...dto});
        return subject;
    }

    async deleteSubject (id: mongoose.Schema.Types.ObjectId): Promise<mongoose.Schema.Types.ObjectId> {
        const course = await this.subjectModel.findByIdAndDelete(id);
        return course._id;
    }

}