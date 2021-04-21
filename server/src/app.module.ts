import {Module} from '@nestjs/common';
import {CourseModule} from './course/course.module';
import {SubjectModule} from './subject/subject.module';
import {MaterialModule} from './material/material.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypegooseModule} from "nestjs-typegoose";
import {getMongoConfig} from "./configs/mongo.config";
import {AuthModule} from "./auth/auth.module";
import {UserModule} from "./user/user.module";
import {TokenModule} from "./token/token.module";
import {MailModule} from "./mail/mail.module";
import {GroupModule} from "./group/group.module";
import {JwtAuthGuard} from "./auth/Guards/jwt.auth.guard";
import {APP_GUARD} from "@nestjs/core";
import { GradeModule } from './grade/grade.module';

@Module({
  imports: [
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
    GroupModule,
    GradeModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})

export class AppModule {
}


