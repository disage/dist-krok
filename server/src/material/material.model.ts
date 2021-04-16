import {Prop} from "@typegoose/typegoose";
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";

export interface MaterialModel extends Base{}
export class MaterialModel extends TimeStamps{
  @Prop()
  subjectId: string;

  @Prop()
  materialName: string;

  @Prop()
  materialContent: string;
}
