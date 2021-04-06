import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateMaterialDto , EditMaterialDto} from "./dto/create-material.dto";
import { Material, MaterialDocument } from "./schema/material.schema";

@Injectable()
export class MaterialService {

    constructor(@InjectModel(Material.name) private materialModel: Model<MaterialDocument>) {}


    async getMaterials(id: any): Promise<Material[]>{
        const materials = await this.materialModel.find({'subjectId': id}, {materialContent: 0});
        return materials;
    }

    
    async createMaterial(dto: CreateMaterialDto): Promise<Material>{
        const material = await this.materialModel.create({...dto});
        return material;
    }

    async getAllMaterials(): Promise<Material[]>{
        const materials = await this.materialModel.find({}, {materialContent: 0});
        return materials;
    }

    async editMaterial(dto: EditMaterialDto, id: any): Promise<Material>{
        const editedMaterial = await this.materialModel.findByIdAndUpdate(id, dto,  { new: true });
        return editedMaterial;
    }
    // async deleteCourse (id: ObjectId): Promise<ObjectId> {
    //     const course = await this.courseModel.findByIdAndDelete(id);
    //     return course._id;
    // }

}