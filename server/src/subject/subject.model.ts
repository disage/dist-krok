import {Prop, Ref} from "@typegoose/typegoose";
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {Types} from "mongoose";
import {CourseModel} from "../course/course.model";

export interface SubjectModel extends Base{}
export class SubjectModel extends TimeStamps{
  @Prop({ref: () => CourseModel, type: () => String})
  courseId: Ref<CourseModel, string>;

  @Prop()
  subjectName: string;
}
