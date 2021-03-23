import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CourseModule } from './course/course.module';

@Module ({
    imports:[    
        MongooseModule.forRoot('mongodb://localhost:27020'),
        CourseModule
    ],
})

export class AppModule {}

// import { Module } from '@nestjs/common';
// import { PostService} from "./post/post.service";
// import { ConfigModule } from '@nestjs/config';
// import { AppController } from './app.controller';
// import * as path from 'path';
// import {PostModule} from "./post/post.module";
// import {MongooseModule} from "@nestjs/mongoose";

// @Module({
//   imports: [
//     PostModule,
//      MongooseModule.forRoot(`mongodb+srv://Ncorvenius:depromodesp123@cluster0.uxfga.mongodb.net/Nest?retryWrites=true&w=majority`)
//   ],
//   controllers: [AppController],
//   providers: [],
// })
// export class AppModule {}

