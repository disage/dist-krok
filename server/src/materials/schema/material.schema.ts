import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from  'mongoose';
import { Subject } from '../../subjects/schema/subject.schema';

export type MaterialDocument = Material & mongoose.Document;

@Schema()
export class Material {

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Subject' })
    subjectId: Subject;
  @Prop()
    materialName: string; 
  @Prop()
    materialContent: string;   
  @Prop()
    isTest: boolean;
}

export const MaterialSchema = SchemaFactory.createForClass(Material);