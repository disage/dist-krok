import {Document, Types} from 'mongoose';

export interface IUserToken extends Document {
  readonly token: string;
  readonly uId: Types.ObjectId;
  readonly expireAt: Date;
}
