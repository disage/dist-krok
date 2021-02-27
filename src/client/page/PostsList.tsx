import * as React from "react";
import {Layout, Menu, Breadcrumb, Table, Space, message} from 'antd';
import {Link} from "react-router-dom";

const {Header, Content, Footer} = Layout;

const PostsList = () => {

  const [posts, setPosts] = React.useState<string[]>([]);


    React.useEffect(() => {
      fetch('/api/post')
        .then((response) => response.json())
        .then((posts) => setPosts(posts))
    }, [])



  const deleteRequest = (id:string ) => {
    fetch("/api/post/" + id,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE",
      })
      .then(function (res) {
        message.success('Post has been removed')
      })
      .catch(function (res) {
        message.error(res.toString())
      })

    fetch('/api/post')
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
  }


  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => {
        const url = '/post/' + record._id
        return (
          <Link to={url}>{text}</Link>
        )
      },
    },
    {
      title: 'Time',
      dataIndex : 'time',
      key: 'time',
    },
    {
      title: 'Description',
      dataIndex : 'description',
      key : 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <button onClick={ () => deleteRequest(record._id) }>Delete</button>
        </Space>
      ),
    },
  ];


  return (
        <Content style={{padding: '0 50px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Posts</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Table dataSource={posts as any} columns={columns}/>
          </div>
        </Content>
  )
}

export default PostsList;
