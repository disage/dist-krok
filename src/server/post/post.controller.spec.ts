import { HttpStatus } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { CreatePostDto} from "./dto/create-post.dto";
import * as request from 'supertest';
import { app, database } from '../constants';
import {MongooseModule} from "@nestjs/mongoose";

beforeAll(async () => {
  await MongooseModule.forRoot(database)
});

afterAll(async done => {
  await mongoose.disconnect(done);
});

describe('POST', () => {
  const post: CreatePostDto = {
    title: 'New post',
    description: 'Post Description',
    time: "2021-02-05T13:53:44.651Z"
  };

  let postId: string;

  it('should list all posts', () => {
    return request(app)
      .get('/post')
      .expect(200);
  });

  it('should create post', () => {
    return request(app)
      .post('/post')
      .send(post)
      .expect(({ body }) => {
        // console.log(body)
        expect(body._id).toBeDefined();
        postId = body._id;
        expect(body.title).toEqual(post.title);
        expect(body.description).toEqual(post.description);
      })
      .expect(HttpStatus.CREATED);
  });

  it('should read post', () => {
    return request(app)
      .get(`/post/${postId}`)
      .expect(({ body }) => {
        console.log(body)
        expect(body.title).toEqual(post.title);
        expect(body.description).toEqual(post.description);
        expect(body.time).toEqual(post.time);
      })
      .expect(200);
  });

  it('should update post', () => {
    return request(app)
      .put(`/post/${postId}`)
      .send({
        title: 'newTitle',
      })
      .expect(({ body }) => {
        expect(body.title).not.toEqual(post.title);
        expect(body.description).toEqual(post.description);
        expect(body.time).toEqual(post.time);
      })
      .expect(200);
  });

  it('should delete post', async () => {
    return request(app)
      .delete(`/post/${postId}`)
      .expect(({ body }) => {
        expect(body.title).not.toEqual(post.title);
        expect(body.description).toEqual(post.description);
        expect(body.time).toEqual(post.time);
      });
  });
});
