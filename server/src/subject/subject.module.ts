import {Module} from "@nestjs/common";
import {SubjectController} from "./subject.controller";
import {SubjectService} from "./subject.service";
import {TypegooseModule} from "nestjs-typegoose";
import {SubjectModel} from "./subject.model";

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: SubjectModel,
        schemaOptions: {
          collection: 'Subject'
        },
      }
    ])
  ],
  controllers: [SubjectController],
  providers: [SubjectService],
})

export class SubjectModule {
}
