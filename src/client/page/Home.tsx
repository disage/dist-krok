import * as React from "react";
import {Breadcrumb, Layout} from "antd";

const {Content} = Layout;

const Home = () => {
  return (
    <Content style={{padding: '0 50px'}}>
      <Breadcrumb style={{margin: '16px 0'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <h1 className="home-text">Hi! My name is Hello post! I am created for a publication your posts. </h1>
      </div>
    </Content>
  )
}

export default Home;
