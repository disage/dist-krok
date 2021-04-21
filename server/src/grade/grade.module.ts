import { Module } from '@nestjs/common';
import { GradeController } from './grade.controller';
import { GradeService } from './grade.service';
import {TypegooseModule} from "nestjs-typegoose";
import {GradeModel} from "./grade.model";

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: GradeModel,
        schemaOptions: {
          collection: 'Grade'
        },
      },
    ]),
  ],
  controllers: [GradeController],
  providers: [GradeService]
})
export class GradeModule {}
