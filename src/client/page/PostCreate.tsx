import * as React from "react";
import {Breadcrumb, Button, Input, Layout, message} from "antd";
import {Link} from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import {Component, ReactEventHandler, useState} from "react";
import {CreatePostDto} from "../../server/post/dto/create-post.dto";

const {Header, Content, Footer} = Layout;

type PostState = {
  title: String,
  description: String
}

export const PostCreate: React.FC = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const descriptionHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  const sendRequest = () => {
    fetch("/api/post",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({title, description, time: new Date()})
      })
      .then(function (res) {
        message.success('Post has been created');
      })
      .catch(function (res) {
        message.error(res);
      })
  }

  return (
    <Content style={{padding: '0 50px'}}>
      <Breadcrumb style={{margin: '16px 0'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/posts">Create Post</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <h1>Create post</h1>
        <p>
          <p>Input Title</p>
          <Input
            onChange={titleHandler}
            placeholder="Hello world"/>
        </p>
        <p>
          <p>Input Description</p>
          <TextArea
            onChange={descriptionHandler}
            rows={4}/>
        </p>
        <Button onClick={sendRequest} type="primary">Create</Button>
      </div>
    </Content>
  )
}
