import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MaterialService } from './material.service';
import { CreateMaterialDto, EditMaterialsDto } from './dto/create-material.dto';

@Controller('/material')
export class MaterialController {
  constructor(private materialService: MaterialService) {}

  @Get(':id')
  getMaterials(@Param('id') id: string) {
    return this.materialService.getMaterials(id);
  }

  @Post()
  createMaterial(@Body() dto: CreateMaterialDto) {
    return this.materialService.createMaterial(dto);
  }

  @Get()
  getAllMaterials() {
    return this.materialService.getAllMaterials();
  }

  @Put(':id')
  editCourse(@Body() dto: EditMaterialsDto, @Param('id') id: string) {
    return this.materialService.editMaterial(dto, id);
  }
  @Delete(':id')
  deleteMaterial(@Param('id') id: string) {
    return this.materialService.deleteMaterial(id);
  }
}
