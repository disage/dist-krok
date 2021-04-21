import {IsString} from "class-validator";

export class CreateGradeDto{
  @IsString()
  userId: string

  @IsString()
  materialId: string;
}
