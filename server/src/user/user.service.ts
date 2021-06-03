import {HttpException, Injectable, NotFoundException} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import { CreateUserDto } from './dto/create-user.dto';
import {ModelType, DocumentType} from "@typegoose/typegoose/lib/types";
import {UserModel} from "./user.model";
import {InjectModel} from "nestjs-typegoose";
import {roleEnum} from "./enums/role.enum";
import { GroupModel } from '../group/group.model';
import { Types } from 'mongoose';

@Injectable()
export class UserService {

    private readonly saltRounds = 10;

    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) {}

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.saltRounds);
        return await bcrypt.hash(password, salt);
    }

    async create(createUserDto: CreateUserDto, roles: string){
        const hash = await this.hashPassword(createUserDto.password);
        const createdUser = new this.userModel(_.assignIn(createUserDto, { password: hash, roles }));
        return await createdUser.save();
    }

    async edit(dto: CreateUserDto, id: string){
        return this.userModel.findByIdAndUpdate(id, dto, {new: true}).exec()
    }

    async delete(id: string){
        return this.userModel.findByIdAndDelete(id).exec()
    }

    async updateRole(id: string, role: string){
        const user = await this.userModel.findById(id);
        if (!user){
            return new HttpException(NotFoundException, 404)
        }
        user.roles = roleEnum[role];
        return user.save();
    }

    async getAll(){
        return this.userModel.find({}).exec()
    }

    async findById(id: string){
        return await this.userModel.findById(id).exec();
    }

    async findByEmail(email: string): Promise<DocumentType<UserModel>> {
        return await this.userModel.findOne({ email }).exec();
    }

    async update(id: string, payload: Partial<DocumentType<UserModel>>) {
        return this.userModel.updateOne({_id: id}, payload).exec();
    }

    async getMyProfile({user}){
        const id = user._id;
        return this.userModel.aggregate([
            {
                $match: {
                    _id: Types.ObjectId(id)
                }
            },
            { $unset: "password" },
            {
                $lookup: {
                    from: 'Group',
                    localField: '_id',
                    foreignField: 'groupStudents',
                    as: 'groups',
                }
            },
            { $unwind: "$groups" },
            {
                $lookup: {
                    from: 'Course',
                    localField: 'groups._id',
                    foreignField: 'groupsId',
                    as: 'course',
                }
            },
            {
                $project:{
                    _id : 1,
                    email : 1,
                    firstName : 1,
                    lastName : 1,
                    phone : 1,
                    userGroup : "$groups.groupName",
                    userCourses : "$course",
                }
            }
        ]).exec() as (UserModel & {group: GroupModel})[];
    }
}
