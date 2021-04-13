
import React from 'react';
import { Link  } from 'react-router-dom';
import CourseStore from '../../store/course';
import { observer } from 'mobx-react-lite';
import './CourseItem.scss';

interface CourseItemProps {
  courseData: any;
  secondaryTitle: string;
  path: string;
}
const store = new CourseStore();

const CourseItem: React.FC<CourseItemProps> = observer(({courseData,secondaryTitle, path}) => {  

  let courseId:string = window.location.pathname.split("/courses/")[1] ;
  let currentCourse:any = store.courses.find(course => course._id === courseId) ? store.courses.find(course => course._id === courseId) : store.courses;  


  return (
    <Link
      className="courseItem"
      to={{
        pathname: path,

      }}>
      <p className="courseMain" >{currentCourse.name ? currentCourse.name : courseData ? courseData.name : 'Название курса'}</p>
      <div className="courseSecondary">
        <div className="courseSecondaryWrapper">
          <b>{secondaryTitle}</b>
          <span>{currentCourse.teacher ? currentCourse.teacher : courseData ? courseData.teacher : 'Имя преподователя' }</span>
        </div>
      </div>
    </Link>
  );
});

export default CourseItem;


