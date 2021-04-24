import { IsEmail, IsString, IsNotEmpty, Matches, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {roleEnum} from "../enums/role.enum";
import {statusEnum} from "../enums/status.enum";

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @IsEnum(statusEnum)
    readonly status: statusEnum;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly phone: string;

    @IsEnum(roleEnum)
    readonly roles: roleEnum;

    @IsString()
    @IsNotEmpty()
    @Matches(
        /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
        { message: 'Weak password' },
    )
    @ApiProperty()
    readonly password: string;
}
