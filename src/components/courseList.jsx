import { Avatar, List, Button, Tag, message } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PolaContext from '../components/context';

const CourseList = (props) => {
  const { listType } = props;
  const polaContext = useContext(PolaContext);
  const { enrolledCourses, publishedCourses, allCourses, userName } =
    polaContext.store;
  const data = allCourses;
  const courseListData =
    listType === 'published' ? publishedCourses : enrolledCourses;

  const handleDropCourse = (droppingCourseName) => {
    enrolledCourses.splice(enrolledCourses.indexOf(droppingCourseName), 1);
    polaContext.setStore({
      ...polaContext.store,
      enrolledCourses: [...enrolledCourses],
    });
  };

  const handleCloseCourse = (droppingCourseName) => {
    publishedCourses.splice(courseListData.indexOf(droppingCourseName), 1);
    polaContext.setStore({
      ...polaContext.store,
      publishedCourses: [...publishedCourses],
    });
  };

  const constDangerButtonDisplay = (curCourseName) => {
    if(listType === 'popular'){
      return { display: 'none' };
    }else if (listType === 'enrolled') {
      return courseListData.includes(curCourseName) ? null : { display: 'none' };
    }
  };
  const listItemDisplay = (curCourseName) => {
    console.log('listType :>> ', listType);
    console.log('courseListData :>> ', courseListData);
    if (listType === 'popular') {
      return null;
    } else {
      return courseListData.includes(curCourseName)
        ? null
        : { display: 'none' };
    }
  };

  return (
    <List
      style={{ overflow: 'auto', height: '330px' }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          style={listItemDisplay(item.courseName)}
          className="course-item-style"
          actions={[
            <Button
              onClick={() => {
                if (listType === 'enrolled') {
                  handleDropCourse(item.courseName);
                  message.success(`Dropped ${item.courseName} successfully!`);
                } else {
                  handleCloseCourse(item.courseName);
                  message.success(`Closed ${item.courseName} successfully!`);
                }
              }}
              type="primary"
              shape="round"
              style={constDangerButtonDisplay(item.courseName)}
              danger="true"
            >
              {listType === 'enrolled' ? 'Drop' : 'Close'}
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
                {listType==="enrolled" && enrolledCourses.includes(item.courseName) ? (
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
