import {Controller, Post, Body, ValidationPipe, Get, Query, Patch, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ConfirmAccountDto } from './dto/confirm-account.dto';
import { SignInDto } from './dto/signin.dto';
import { IReadableUser } from '../user/interfaces/readable-user.interface';
import {ForgotPasswordDto} from './dto/forgot-password.dto';
import {JwtAuthGuard} from './Guards/jwt.auth.guard'
import {GetUser} from '../components/decorators/get-user.decorator';
import {IUser} from '../user/interfaces/user.interface';
import {ChangePasswordDto} from './dto/change-password.dto';
import {Public} from "../decorators/public.decorator";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post('/signUp')
    async signUp(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<CreateUserDto> {
        return this.authService.signUp(createUserDto);
    }

    @Public()
    @Get('/confirm')
    async confirm(@Query(new ValidationPipe()) query: ConfirmAccountDto): Promise<boolean> {
        await this.authService.confirm(query.token);
        return true;
    }

    @Public()
    @Post('/signIn')
    async signIn(@Body(new ValidationPipe()) signInDto: SignInDto): Promise<IReadableUser> {
        return await this.authService.signIn(signInDto);
    }

    @Public()
    @Post('/forgotPassword')
    async forgotPassword(@Body(new ValidationPipe()) forgotPasswordDto: ForgotPasswordDto): Promise<void> {
        return this.authService.forgotPassword(forgotPasswordDto);
    }

    @Patch('/changePassword')
    @UseGuards(JwtAuthGuard)
    async changePassword(
        @GetUser() user: IUser,
        @Body(new ValidationPipe()) changePasswordDto: ChangePasswordDto,
    ): Promise<boolean> {
        return this.authService.changePassword(user._id, changePasswordDto);
    }
}
