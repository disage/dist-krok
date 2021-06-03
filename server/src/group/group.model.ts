import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {Types} from "mongoose";
import {prop} from "@typegoose/typegoose";

export class GroupModel extends TimeStamps{
  @prop()
  groupName: string;

  @prop()
  groupTeacher: Types.ObjectId;

  @prop({ type: () => [String]})
  groupStudents: Types.ObjectId[];
}
