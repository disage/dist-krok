import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {

  @Prop()
  courseId: string;
  @Prop()
  subjectId: string;
  @Prop()
  subjectName: string;
}



export const MaterialSchema = SchemaFactory.createForClass(Subject);
