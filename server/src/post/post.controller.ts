import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';
import { Post as PostSchema } from './schemas/post.schema';

@Controller('api/post')
export class PostController {

  constructor(private readonly postService: PostService) {}

  @Get()
  getAll(): Promise<PostSchema[]> {
    return this.postService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<PostSchema> {
    return this.postService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createPostDto: CreatePostDto): Promise<PostSchema> {
    return this.postService.create(createPostDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<PostSchema> {
    return this.postService.remove(id)
  }

  @Put(':id')
  update(@Body() UpdatePostDto: UpdatePostDto, @Param('id') id: string): Promise<PostSchema> {
    return this.postService.update(id, UpdatePostDto)
  }

}
