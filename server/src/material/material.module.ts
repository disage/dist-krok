import {Module} from "@nestjs/common";
import {MaterialController} from "./material.controller";
import {MaterialService} from "./material.service";
import {TypegooseModule} from "nestjs-typegoose";
import {MaterialModel} from "./material.model";

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: MaterialModel,
        schemaOptions: {
          collection: 'Material'
        },
      }
    ]),
  ],
  controllers: [MaterialController],
  providers: [MaterialService],
})

export class MaterialModule {
}
