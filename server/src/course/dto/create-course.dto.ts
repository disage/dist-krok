import {IsString} from "class-validator";
import {Types} from "mongoose";

export class CreateCourseDto {
    @IsString()
    name: string;

    @IsString()
    teacherId: Types.ObjectId;
}
