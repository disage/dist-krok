import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";
import {Types} from "mongoose";

export interface GradeModel extends Base{}
export class GradeModel extends TimeStamps{
  @prop()
  userId: Types.ObjectId;

  @prop()
  materialId: Types.ObjectId;

  @prop()
  teacherId: Types.ObjectId;

  @prop()
  value: number;
}
