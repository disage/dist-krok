import { Injectable } from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {GroupModel} from "./group.model";
import {ModelType, DocumentType} from "@typegoose/typegoose/lib/types";
import {CreateGroupDto} from "./dto/create-group.dto";
import {Types} from "mongoose";

@Injectable()
export class GroupService {
  constructor(@InjectModel(GroupModel) private readonly groupModel: ModelType<GroupModel>) {}

  async create(dto: CreateGroupDto): Promise<DocumentType<GroupModel>>{
    return this.groupModel.create(dto);
  }

  async updateById(dto: CreateGroupDto, id: string){
    const idTypeObject = Types.ObjectId(id);
    return this.groupModel.findByIdAndUpdate(idTypeObject, dto, {new: true}).exec();
  }

  async findById(id: string): Promise<DocumentType<CreateGroupDto>>{
    return this.groupModel.findById(id);
  }

  async getAll(): Promise<DocumentType<CreateGroupDto>[]> {
    // I don't know why this doesn't work
    return this.groupModel.find({})
  }

  async addStudent(id, {groupStudents}){
    const document = await this.findById(id)
    const updatedGroup = await document.groupStudents.concat(groupStudents)
    document.groupStudents = updatedGroup
    return await document.save();
  }

  async delete(id: string){
    return this.groupModel.findByIdAndDelete(id)
  }

}
