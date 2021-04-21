import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop, Ref} from "@typegoose/typegoose";
import {MaterialModel} from "../material/material.model";
import {UserModel} from "../user/user.model";

export interface GradeModel extends Base{}
export class GradeModel extends TimeStamps{
  @prop({ref: () => UserModel, type: String})
  userId: Ref<UserModel, string>

  @prop({ref: () => MaterialModel, type: String})
  materialId: Ref<MaterialModel, string>
}
