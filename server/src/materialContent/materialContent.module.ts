import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MaterialController } from "./materialContent.controller";
import { MaterialService } from "./materialContent.service";
import { Material, MaterialSchema } from "../materials/schema/material.schema";
@Module({
imports: [
    MongooseModule.forFeature([{name: Material.name, schema: MaterialSchema}]),
],
controllers: [MaterialController],
providers: [MaterialService],
})

export class MaterialContentModule{}