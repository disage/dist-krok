import { Module } from '@nestjs/common';

import {PostService} from "./post.service";
import {ConfigService} from "@nestjs/config";
import {PostController} from "./post.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Post, PostSchema} from "./schemas/post.schema";

@Module({
  controllers: [PostController],
  providers: [PostService, ConfigService],
  imports: [MongooseModule.forFeature([
    {name: Post.name, schema: PostSchema}
  ])]
})
export class PostModule {}
