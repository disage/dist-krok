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
    return this.gradeModel.findByIdAndUpdate(id, dto, {new: true})
  }

  async create(dto: CreateGradeDto): Promise<DocumentType<GradeModel>>{
    return this.gradeModel.create(dto)
  }

}
