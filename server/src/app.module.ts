import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CourseModule } from './course/course.module';
import { SubjectModule } from './subjects/subject.module';
import { MaterialModule } from './materials/material.module';

@Module ({
    imports:[    
        MongooseModule.forRoot('mongodb://localhost:27020'),
        CourseModule,
        SubjectModule,
        MaterialModule,
    ],
})

export class AppModule {}


