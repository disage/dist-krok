import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { promisify } from 'util';
import { ConfigService } from "@nestjs/config";
import * as path from "path";
import {PostListResponse} from "./post.types";
import {InjectModel} from "@nestjs/mongoose";
import {Post, PostDocument} from "./schemas/post.schema";
import {Model} from "mongoose";
import {CreatePostDto} from "./dto/create-post.dto";
import {UpdatePostDto} from "./dto/update-post.dto";

const promisifiedReadDir = promisify(fs.readdir);

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {};

  async getAll(): Promise<Post[]>{
    return this.postModel.find().exec()
  }

  async getById(id: string): Promise<Post>{
    return this.postModel.findById(id)
  }

  async create(postDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(postDto)
    return newPost.save()
  }

  async remove(id: string): Promise<Post>{
    return this.postModel.findByIdAndRemove(id)
  }

  async update(id: string, postDto: UpdatePostDto): Promise<Post>{
    return this.postModel.findByIdAndUpdate(id, postDto, {new: true})
  }

}
