import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
// import { SubjectModule } from './subject/subject.module';
// import { MaterialModule } from './material/material.module';
// import { MaterialContentModule } from './materialContent/materialContent.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypegooseModule} from "nestjs-typegoose";
import {getMongoConfig} from "./configs/mongo.config";

@Module ({
    imports:[
        ConfigModule.forRoot(),
        TypegooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getMongoConfig
        }),
        CourseModule,
        /*SubjectModule,
        MaterialModule,
        MaterialContentModule,*/
    ],
})

export class AppModule {}


