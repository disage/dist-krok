import { IsString, IsDateString } from 'class-validator';
import {Types} from "mongoose";

export class CreateUserTokenDto {
  @IsString()
  token: string;
  @IsString()
  uId: Types.ObjectId;
  @IsDateString()
  expireAt: string;
}
