import { Injectable } from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {GradeModel} from "./grade.model";
import {ModelType, DocumentType} from "@typegoose/typegoose/lib/types";
import {CreateGradeDto} from './dto/create-grade.dto'

@Injectable()
export class GradeService {
  constructor(@InjectModel(GradeModel) private readonly gradeModel: ModelType<GradeModel>) {}

  async getById(id: string): Promise<DocumentType<GradeModel> | null>{
    return this.gradeModel.findById(id);
  }

  async updateById(dto: CreateGradeDto, id: string): Promise<DocumentType<GradeModel>>{
    return this.gradeModel.findByIdAndUpdate(id, dto, {new: true}).exec();
  }

  async createGrade(dto: CreateGradeDto){
    return this.gradeModel.create(dto)
  }

  async deleteGrade(id){
    return this.gradeModel.remove(id).exec();
  }

  async getByMaterialId(id){
    return this.gradeModel.find({materialId: id}, {}).exec();
  }

  async getMyGrades({user}){
    const id = user._id;
    return this.gradeModel.find({userId: id}, {}).exec();
  }

}
