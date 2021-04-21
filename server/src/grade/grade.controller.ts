import {Controller, Param, Post} from '@nestjs/common';
import {GradeService} from "./grade.service";

@Controller('/grade')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Post(':id')
  async getById(@Param('id') id: string){
    return await this.gradeService.getById(id);
  }
}


