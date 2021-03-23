import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema()
export class Course {
  @Prop()
  name: string;
  @Prop()
  teacher: string;
  @Prop()
  subjects: [
    {
     subjectId: string,
     subjectName: string,
     materials: [
       {materialId: string, materialName: string, materialContent: string, isTest:boolean}
     ]
    
    }
  ];
}

export const CourseSchema = SchemaFactory.createForClass(Course);