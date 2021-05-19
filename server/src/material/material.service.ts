import { Injectable } from "@nestjs/common";
import { CreateMaterialDto , EditMaterialsDto} from "./dto/create-material.dto";
import {MaterialModel} from "./material.model";
import {ModelType, DocumentType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "nestjs-typegoose";

@Injectable()
export class MaterialService {

    constructor(@InjectModel(MaterialModel) private materialModel: ModelType<MaterialModel>) {}

    async getMaterial(id: string): Promise<DocumentType<MaterialModel>[]>{
        return this.materialModel.find({'subjectId': id}, {materialContent: 0});
    }

    async createMaterial(dto: CreateMaterialDto): Promise<DocumentType<MaterialModel>>{
        return this.materialModel.create({...dto});
    }

    async getAllMaterials(): Promise<DocumentType<MaterialModel>[]>{
        return this.materialModel.find({}, {materialContent: 0});
    }

    async editMaterial(dto: EditMaterialsDto, id: string): Promise<DocumentType<MaterialModel>>{
        return this.materialModel.findByIdAndUpdate(id, dto,  { new: true });
    }

}
