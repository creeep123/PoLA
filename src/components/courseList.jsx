import { Avatar, List, Button, Tag, message } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PolaContext from '../components/context';

const CourseList = () => {
  const polaContext = useContext(PolaContext);
  const { enrolledCourses, allCourses } = polaContext.store;
  const data = allCourses;

  const handleDropCourse = (droppingCourseName) => {
    enrolledCourses.splice(enrolledCourses.indexOf(droppingCourseName), 1);
    polaContext.setStore({
      ...polaContext.store,
      enrolledCourses: [...enrolledCourses],
    });
  };

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
              onClick={() => {
                handleDropCourse(item.courseName);
                message.success(`Dropped ${item.courseName} successfully!`);
              }}
              type="primary"
              shape="round"
              style={
                enrolledCourses.includes(item.courseName)
                  ? null
                  : { display: 'none' }
              }
              danger="true"
            >
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
