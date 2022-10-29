import { Avatar, List, Button, Tag } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import courseData from './coursesData';
import PolaContext from '../components/context';

const data = courseData;
const CourseList = () => {
  const polaContext = useContext(PolaContext);
  const { enrolledCourses } = polaContext.store;

  return (
    <List
      style={{ overflow: 'auto', height: '330px' }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          className="course-item-style"
          actions={[
            <Button 
              type="primary" 
              shape="round" 
              disabled={enrolledCourses.includes(item.courseName)
                ? false
                : true}
              danger="true">
              Drop
            </Button>,
            <Link to={`/course/enroll/${item.courseName}`}>
              <Button type="primary" shape="round">
                View Course
              </Button>
            </Link>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={
              <Link to={`/course/enroll/${item.courseName}`}>
                {item.courseName}&nbsp;&nbsp;
                {enrolledCourses.includes(item.courseName) ? (
                  <Tag color={'gray'}>Enrolled</Tag>
                ) : (
                  ''
                )}
              </Link>
            }
            description={item.teacher}
          />
        </List.Item>
      )}
    />
  );
};
export default CourseList;
