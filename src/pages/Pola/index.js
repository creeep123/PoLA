import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const PolaPage = () => {
  return (
    <Content
      style={{
        margin: '0 16px',
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 360,
        }}
      >
        This is PoLA.
      </div>
    </Content>
  );
};

export default PolaPage;
