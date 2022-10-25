import { Avatar, List, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import React from 'react';
const data = [
  {
    title: 'Design Thinking',
    description: 'by Alan Walker',
  },
  {
    title: 'Analog photography',
    description: 'by Dave Chappelle',
  },
  {
    title: 'Master Instagram',
    description: 'by Stephen Shore',
  },
  {
    title: 'Appreciation of Film Art',
    description: 'by Christopher Nolan',
  },
];
const CourseList = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        className="course-item-style"
        actions={[
          <Button type="primary" shape="round">
            View Course
          </Button>,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
);
export default CourseList;
