import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { SubjectModule } from './subject/subject.module';
import { MaterialModule } from './material/material.module';
// import { MaterialContentModule } from './materialContent/materialContent.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypegooseModule} from "nestjs-typegoose";
import {getMongoConfig} from "./configs/mongo.config";
import {AuthModule} from "./auth/auth.module";
import {UserModule} from "./user/user.module";
import {TokenModule} from "./token/token.module";
import {MailModule} from "./mail/mail.module";
import { GroupService } from './group/group.service';
import { GroupModule } from './group/group.module';

@Module ({
    imports:[
        ConfigModule.forRoot(),
        TypegooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getMongoConfig
        }),
        CourseModule,
        SubjectModule,
        MaterialModule,
        AuthModule,
        UserModule,
        TokenModule,
        MailModule,
        GroupModule
        // MaterialContentModule,
    ],
    providers: [],
})

export class AppModule {}


