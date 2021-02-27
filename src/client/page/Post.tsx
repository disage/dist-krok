import * as React from "react";
import {PostListResponse} from "../../server/post/post.types";
import {Breadcrumb, Layout, Menu, Table} from "antd";
import {Link, useParams} from "react-router-dom";
import {PostSchema} from "../../server/post/schemas/post.schema";

const {Header, Content, Footer} = Layout;

// import {PostComponent} from "../components/postsComponent";

const Post = () => {
  const {id}: { id: string } = useParams();

  const [post, setPost] = React.useState<any>([]);

  React.useEffect(() => {
    const url = '/api/post/' + id;
    fetch(url)
      .then((response) => response.json())
      .then((post: Array<typeof PostSchema>) => setPost(post))
  }, [])

  console.log(post);

  return (
    <Content style={{padding: '0 50px'}}>
      <Breadcrumb style={{margin: '16px 0'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/posts">Posts</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{post.title}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
    </Content>
  )
}

export default Post;
