import React from 'react';
import CourseItem from '../../сomponents/CourseItem/CourseItem';
import './AllGrades.scss';
const AllGrades = () => {
  return (
    <div className="allGrades">
      <h2>Ваши оценки:</h2>
      <CourseItem
        courseData={{ courseId: '1', courseName: 'ООП' }}
        secondaryTitle="68"
        path="/grades/"
      />
      <CourseItem
        courseData={{ courseId: '2', courseName: 'Анализ данных' }}
        secondaryTitle="75"
        path="/grades/"
      />
      <CourseItem
        courseData={{ courseId: '3', courseName: 'Алгебра' }}
        secondaryTitle="40"
        path="/grades/"
      />
    </div>
  );
};

export default AllGrades;
