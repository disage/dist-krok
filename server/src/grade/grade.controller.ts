import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {GradeService} from "./grade.service";
import {CreateGradeDto} from "./dto/create-grade.dto";
import { Roles } from '../decorators/roles.decorator';
import { RolesGuard } from '../auth/Guards/roles.guard';

@Controller('/grade')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Get(':id')
  async getById(@Param('id') id: string){
    return await this.gradeService.getById(id);
  }

  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  @Post('create')
  async createGrade(@Body() dto: CreateGradeDto){
    return await this.gradeService.createGrade(dto);
  }

  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  @Put(':id')
  async changeGrade(@Body() dto: CreateGradeDto, @Param('id') id: string){
    return await this.gradeService.updateById(dto, id);
  }

  @Roles('admin', 'teacher')
  @UseGuards(RolesGuard)
  @Delete(':id')
  async deleteGrade(@Param('id') id: string){
    return await this.gradeService.deleteGrade(id);
  }

  @Get('get/my')
  async getMyGrades(@Request() req){
    return await this.gradeService.getMyGrades(req);
  }

  @Get('meterialId/:id')
  async getFromMaterial(@Param('id') id: string){
    return await this.gradeService.getByMaterialId(id);
  }
}


