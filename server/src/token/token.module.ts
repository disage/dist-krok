import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import {TypegooseModule} from "nestjs-typegoose";
import {TokenModel} from "./token.model";

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TokenModel,
        schemaOptions: {
          collection: 'Token'
        },
      }
    ])
  ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
