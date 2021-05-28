import React from 'react';
import { Link  } from 'react-router-dom';

import './CourseItem.scss';

interface CourseItemProps {
  courseData: any;
  secondaryTitle: string;
  path: string;
}

const CourseItem: React.FC<CourseItemProps> = ({courseData,secondaryTitle, path}) => {

  // let courseId:string = window.location.pathname.split("/courses/")[1] ;
  // let currentCourse:any = store.courses.find(course => course._id === courseId) ? store.courses.find(course => course._id === courseId) : store.courses;


  return (
    <Link
      className="courseItem"
      to={{
        pathname: path,

      }}>
      <p className="courseMain" >{courseData?.name || 'Название курса'}</p>
      <div className="courseSecondary">
        <div className="courseSecondaryWrapper">
          <b>{secondaryTitle}</b>
          <span>{courseData?.teacherId || '' }</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;


