import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SubjectController } from "./subject.controller";
import { SubjectService } from "./subject.service";

import { MaterialSchema, Subject } from "./schema/subject.schema";
@Module({
imports: [
    MongooseModule.forFeature([{name: Subject.name, schema: MaterialSchema}]),
],
controllers: [SubjectController],
providers: [SubjectService],
})

export class SubjectModule{}