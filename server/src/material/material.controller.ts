import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {MaterialService} from "./material.service";
import {CreateMaterialDto, EditMaterialsDto} from "./dto/create-material.dto";
import {Roles} from "../decorators/roles.decorator";
import {RolesGuard} from "../auth/Guards/roles.guard";

@Controller('/material')
export class MaterialController {
  constructor(private materialService: MaterialService) {
  }

  @Get(':id')
  getMaterials(@Param('id') id: string) {
    return this.materialService.getMaterial(id);
  }

  @Post()
  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  createMaterial(@Body() dto: CreateMaterialDto) {
    return this.materialService.createMaterial(dto);
  }

  @Get()
  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  getAllMaterials() {
    return this.materialService.getAllMaterials();
  }

  @Put(':id')
  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  editCourse(@Body() dto: EditMaterialsDto, @Param('id') id: string) {
    return this.materialService.editMaterial(dto, id);
  }

  @Delete(':id')
  deleteMaterial(@Param('id') id: string) {
    return this.materialService.deleteMaterial(id);
  }
}
