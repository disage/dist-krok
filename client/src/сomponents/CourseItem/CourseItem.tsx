import React from 'react';
import { Link  } from 'react-router-dom';
import { ICourse } from '../../types/course';
import './CourseItem.scss';
interface CourseItemProps {
  courseData: ICourse;
  secondaryTitle: string;
  path: string;
}
const CourseItem: React.FC<CourseItemProps> = ({courseData, secondaryTitle, path}) => {
  return (
    <Link
      className="courseItem"
      to={{
        pathname: path + courseData._id,
        // courseParams: { courseData, secondaryTitle},
      //   courseParams: {
      //     courseData: ICourse;
      //     secondaryTitle: string;
      // }
      }}>
      <p className="courseMain">{courseData.name}</p>
      <div className="courseSecondary">
        <div className="courseSecondaryWrapper">
          <b>{secondaryTitle}</b>
          <span>{courseData.teacher ? courseData.teacher : ''}</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;


