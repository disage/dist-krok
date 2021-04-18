import {Types} from "mongoose";
import {Prop} from "@typegoose/typegoose";

export class TokenModel{
  @Prop({required: true})
  token: string;

  @Prop({required: true})
  uId: Types.ObjectId;

  @Prop({required: true})
  expireAt: Date;
};
