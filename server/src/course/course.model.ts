import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";
import {Types} from "mongoose";

export interface CourseModel extends Base{}
export class CourseModel extends TimeStamps{
  @prop()
  name: string;

  @prop()
  teacherId: Types.ObjectId;

  @prop()
  groupsId: Types.ObjectId[]
}
