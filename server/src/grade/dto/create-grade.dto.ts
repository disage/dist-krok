import {IsNumber, IsString} from "class-validator";
import {Types} from "mongoose";

export class CreateGradeDto{
  @IsString()
  userId: Types.ObjectId;

  @IsString()
  materialId: Types.ObjectId;

  @IsString()
  teacherId: Types.ObjectId;

  @IsNumber()
  value: number;
}
