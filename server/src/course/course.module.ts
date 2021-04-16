import {Module} from "@nestjs/common";
import {CoursesController} from "./course.controller";
import {CourseService} from "./course.service";
import {TypegooseModule} from "nestjs-typegoose";
import {CourseModel} from "./course.model";

@Module({
  imports: [
      TypegooseModule.forFeature([
          {
              typegooseClass: CourseModel,
              schemaOptions: {
                  collection: 'Course'
              },
          },
      ]),
  ],
  controllers: [CoursesController],
  providers: [CourseService],
})

export class CourseModule {}
