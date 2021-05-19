import { Injectable } from '@nestjs/common';
import { CreateSubjectDto, EditSubjectDto } from './dto/create-subject.dto';
import { SubjectModel } from './subject.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(SubjectModel) private subjectModel: ModelType<SubjectModel>,
  ) {}

  async getAllSubjects(): Promise<DocumentType<SubjectModel>[]> {
    return this.subjectModel.find();
  }
  async getSubjects(id: any): Promise<DocumentType<SubjectModel>[]> {
    return this.subjectModel.find({ courseId: id });
  }

  async createSubject(
    dto: CreateSubjectDto,
  ): Promise<DocumentType<SubjectModel>> {
    return this.subjectModel.create({ ...dto });
  }

  async deleteSubject(id: string): Promise<DocumentType<SubjectModel>> {
    return this.subjectModel.findByIdAndDelete(id).exec();
  }
  async editSubject(
    dto: CreateSubjectDto,
    id: string,
  ): Promise<DocumentType<SubjectModel> | null> {
    return this.subjectModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }
}
