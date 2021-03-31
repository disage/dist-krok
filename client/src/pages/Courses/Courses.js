import React, { useState, useEffect } from 'react';
import CourseItem from '../../сomponents/CourseItem/CourseItem';
// import { ICourse, ICourseState } from '../../types/course';
import CourseStore from '../../store/course';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import './Courses.scss';

const store = new CourseStore();

const Courses = observer((props) => {

  const [formStatus, setFormStatus] = useState(false);

  let formStatusHandler = (status) => {
    setFormStatus(status);
  };

  return (
    <>
      {/* {console.log(toJS(Course.courses))} */}
      {formStatus ? (
        <div className="courses">
          <div className="coursesHeader">
            <h2>Добавьте курс:</h2>
            <span
              onClick={() => {
                formStatusHandler(false);
              }}>
              Назад
            </span>
          </div>
          <form className="addCourseForm"></form>
        </div>
      ) : (
        <div className="courses">
          <div className="coursesHeader">
            <h2>Ваши курсы:</h2>
            <div
              className="addCourseBtn"
              onClick={() => {
                formStatusHandler(true);
              }}>
              Добавить курс
            </div>
          </div>
          <div className="coursesWrapper">
            {store.courses.map((course) => (
              <CourseItem
                key={course._id}
                courseData={course}
                secondaryTitle="Преподователь"
                path="/courses/"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
});
export default Courses;
