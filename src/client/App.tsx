import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import PostsList from "./page/PostsList";
import Home from "./page/Home";
import Post from "./page/Post";
import {PostCreate} from "./page/PostCreate";

import './assest/css/main.css';
import {Breadcrumb, Layout, Menu, Table} from "antd";

const {Header, Content, Footer} = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Router>
        <Header>
          <div className="logo_title">Hello</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/posts">Posts</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/create">Create post</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Switch>
          <Route path='/post/:id'>
            <Post/>
          </Route>
          <Route path='/update/:id'>
            <PostCreate/>
          </Route>
          <Route path='/posts'>
            <PostsList/>
          </Route>
          <Route path='/create'>
            <PostCreate/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
        <Footer style={{textAlign: 'center'}}>Hello Posts! ©2021 Created by Vladislav Razyhraiev</Footer>
      </Router>
    </Layout>
  );
};

render(<App/>, document.getElementById('app'));
