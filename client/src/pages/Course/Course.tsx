import React, { useEffect } from 'react';
import CourseItem from '../../сomponents/CourseItem/CourseItem';
import SubjectItem from '../../сomponents/SubjectItem/SubjectItem';
// import { ICourse } from '../../types/course';
import CourseStore from '../../store/course';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import './Course.scss';
import {ICourse} from "../../types/course";

const store = new CourseStore();

const Course = observer(() => {

  // useEffect(() => {
  //   let courseId = window.location.pathname.split("/courses/")[1];
  //   CourseStore.getAllCourses(`/${courseId}`);
  // }, []);


  return (
    <div className="course">
      {/*<CourseItem*/}
      {/*  courseData={CourseStore.courses}*/}
      {/*  secondaryTitle="Преподователь"*/}
      {/*  path="/courses/"*/}
      {/*  />*/}
      {/*<div className="subjectWrapper">*/}
      {/*  {toJS(CourseStore.subjects.subjects).length > 0*/}
      {/*  ?*/}
      {/*    toJS(CourseStore.subjects.subjects).map((element) => (*/}
      {/*    <SubjectItem key={element.subjectId} subjectData={element} />))*/}
      {/*  :*/}
      {/*  'Темы отсутсвтуют'}*/}
      {/*</div>*/}
    </div>
  );
});

export default Course;
