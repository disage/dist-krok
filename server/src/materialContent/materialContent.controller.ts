import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { MaterialService } from "./materialContent.service";
import { CreateMaterialContentDto } from "./dto/create-materialContent.dto";

@Controller('/materialContent')
export class MaterialController {

    constructor(private materialService: MaterialService ) {}

    @Get(':id')
    getMaterialContent (@Param('id') id: any){
        return this.materialService.getMaterialContent(id);
    }

    @Get()
    getAllMaterialsContent (){
        return this.materialService.getAllMaterialsContent();
    }
    
}