import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateMaterialContentDto } from "./dto/create-materialContent.dto";
import { Material, MaterialDocument } from "../materials/schema/material.schema";

@Injectable()
export class MaterialService {

    constructor(@InjectModel(Material.name) private materialModel: Model<MaterialDocument>) {}


    async getMaterialContent(id: any): Promise<Material[]>{
        const materialContent = await this.materialModel.find({'_id': id});
        return materialContent;
    }
    

    async getAllMaterialsContent(): Promise<Material[]>{
        const materialsContent = await this.materialModel.find();
        return materialsContent;
    }



}