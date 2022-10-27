import { Avatar, List, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import courseData from './coursesData';

const data = courseData;
const CourseList = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        className="course-item-style"
        actions={[
          <Link to={`/course/enroll/${item.courseName}`}>
            <Button type="primary" shape="round">
              View Course
            </Button>
          </Link>,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.courseName}</a>}
          description={item.teacher}
        />
      </List.Item>
    )}
  />
);
export default CourseList;
