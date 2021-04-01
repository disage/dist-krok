import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from  'mongoose';
import { Course } from "../../course/schema/course.schema";

export type SubjectDocument = Subject & mongoose.Document;

@Schema()
export class Subject {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
  courseId: Course;
  @Prop()
  subjectName: String;
}



export const MaterialSchema = SchemaFactory.createForClass(Subject);