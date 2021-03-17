import React from 'react';
import { Link } from 'react-router-dom';
import './CourseItem.scss';

const CourseItem = ({ courseData, secondaryTitle, path }) => {
  return (
    <Link
      className="courseItem"
      to={{
        pathname: path + courseData.courseId,
        courseParams: { courseData, secondaryTitle },
      }}>
      <p className="courseMain">{courseData.courseName}</p>
      <div className="courseSecondary">
        <div className="courseSecondaryWrapper">
          <b>{secondaryTitle}</b>
          <span>{courseData.courseTeacher ? courseData.courseTeacher : ''}</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;
