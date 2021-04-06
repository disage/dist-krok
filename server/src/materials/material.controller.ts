import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { MaterialService } from "./material.service";
import { CreateMaterialDto, EditMaterialDto } from "./dto/create-material.dto";

@Controller('/materials')
export class MaterialController {

    constructor(private materialService: MaterialService ) {}

    @Get(':id')
    getMaterials(@Param('id') id: any){
        return this.materialService.getMaterials(id);
    }

    @Post()
    createMaterial(@Body() dto: CreateMaterialDto) {
        return this.materialService.createMaterial(dto);
    }

    @Get()
    getAllMaterials(){
        return this.materialService.getAllMaterials();
    }
    
    @Put(':id')
    editCourse(@Body() dto: EditMaterialDto, @Param('id') id: any){
        return this.materialService.editMaterial(dto, id);
    }

}