import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MaterialDocument = Material & Document;

@Schema()
export class Material {

  @Prop()
  materials: [
    {
      subjectId: string,
      materialId: string,
      materialName: string, 
      materialContent: string, 
      isTest:boolean
     }
  ]
}

export const MaterialSchema = SchemaFactory.createForClass(Material);