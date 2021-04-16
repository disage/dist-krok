import {Prop} from "@typegoose/typegoose";
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {Types} from "mongoose";

export interface SubjectModel extends Base{}
export class SubjectModel extends TimeStamps{
  @Prop()
  subjectId: Types.ObjectId;
  @Prop()
  subjectName: string;
}
