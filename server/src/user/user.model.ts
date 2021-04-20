import { roleEnum } from './enums/role.enum';
import { statusEnum } from './enums/status.enum';
import {Prop} from "@typegoose/typegoose";
import {Types} from "mongoose";

export class UserModel{
  @Prop({ required: true })
  email: string;

  @Prop({enum: statusEnum, type: String, default: 'pending'})
  status: statusEnum;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  phone: string;

  @Prop()
  groupId: Types.ObjectId;

  @Prop({enum: roleEnum, type: String})
  roles: roleEnum[];

  @Prop({ required: true })
  password: string;
};

