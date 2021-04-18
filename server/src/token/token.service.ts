import { Injectable } from '@nestjs/common';
import { IUserToken } from './interfaces/user-token.interface';
import { CreateUserTokenDto } from './dto/create-user-token.dto';
import {TokenModel} from "./token.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "nestjs-typegoose";

@Injectable()
export class TokenService {
    constructor(@InjectModel(TokenModel) private readonly tokenModel: ModelType<TokenModel>) { }

    async create(createUserTokenDto: CreateUserTokenDto): Promise<IUserToken> {
        const userToken = new this.tokenModel(createUserTokenDto);
        return await userToken.save();
    }

    async delete(uId: string, token: string): Promise<{ ok?: number, n?: number }> {
        return await this.tokenModel.deleteOne({ uId, token });
    }

    async deleteAll(uId: string): Promise<{ ok?: number, n?: number }> {
        return await this.tokenModel.deleteMany({ uId });
    }

    async exists(uId: string, token: string): Promise<boolean> {
        return await this.tokenModel.exists({ uId, token });
    }
}
