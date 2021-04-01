import React, { useEffect } from 'react';
import CourseItem from '../../сomponents/CourseItem/CourseItem';
import SubjectItem from '../../сomponents/SubjectItem/SubjectItem';
import CourseStore from '../../store/course';
import { observer } from 'mobx-react-lite';
import './Course.scss';

const store = new CourseStore();

const Course = observer(() => {

  let courseId:string = window.location.pathname.split("/courses/")[1];
  let currentCourse:any = store.courses.find(course => course._id === courseId);

  useEffect(() => {
    store.loadSubjects(`/${courseId}`)
  }, []);

  return (
    <div className="course">
      <CourseItem
      courseData={currentCourse}
      secondaryTitle="Преподователь"
      path="/courses/"
     />
     <div className="subjectWrapper">
      {
        store.subjects.length > 0
      ?
      store.subjects.map((element) => (
     <SubjectItem key={element._id} subjectData={element} />))
       :
       'Темы отсутсвтуют'}
      </div>
    </div>
  );
});

export default Course;
