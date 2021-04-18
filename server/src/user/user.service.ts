import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import { CreateUserDto } from './dto/create-user.dto';
import {ModelType, DocumentType} from "@typegoose/typegoose/lib/types";
import {UserModel} from "./user.model";
import {InjectModel} from "nestjs-typegoose";

@Injectable()
export class UserService {

    private readonly saltRounds = 10;

    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) {}

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.saltRounds);
        return await bcrypt.hash(password, salt);
    }

    async create(createUserDto: CreateUserDto, roles: string[]){
        const hash = await this.hashPassword(createUserDto.password);
        const createdUser = new this.userModel(_.assignIn(createUserDto, { password: hash, roles }));
        return await createdUser.save();
    }

    async find(id: string){
        return await this.userModel.findById(id).exec();
    }

    async findByEmail(email: string): Promise<DocumentType<UserModel>> {
        return await this.userModel.findOne({ email }).exec();
    }

    async update(id: string, payload: Partial<DocumentType<UserModel>>) {
        return this.userModel.updateOne({_id: id}, payload);
    }
}
