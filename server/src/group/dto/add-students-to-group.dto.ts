import {IsArray, IsString} from "class-validator";

export class AddStudentsToGroupDto{
  @IsArray()
  @IsString()
  groupStudents: string[]
}
