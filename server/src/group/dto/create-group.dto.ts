import {IsArray, IsString} from "class-validator";
import {Types} from "mongoose";

export class CreateGroupDto{
  @IsString()
  groupName: string;

  @IsString()
  groupTeacher: Types.ObjectId;

  @IsArray()
  @IsString({each: true})
  groupStudents: string[];
}
