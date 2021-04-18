import { Document } from 'mongoose';

export interface IUser extends Document {
    readonly email: string;
    readonly status: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly phone: string;
    readonly roles: string[];
    readonly password: string;
}
