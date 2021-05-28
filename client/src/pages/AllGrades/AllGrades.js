import React from 'react';
import CourseItem from '../../components/CourseItem/CourseItem';
import './AllGrades.scss';
const AllGrades = () => {
  return (
    <div className="allGrades">
      <h2>Ваши оценки:</h2>
      <CourseItem
        courseData={{ courseId: '1', name: 'ООП' }}
        secondaryTitle="68"
        path="/grades/1"
      />
      <CourseItem
        courseData={{ courseId: '2', name: 'Анализ данных' }}
        secondaryTitle="75"
        path="/grades/2"
      />
      <CourseItem
        courseData={{ courseId: '3', name: 'Алгебра' }}
        secondaryTitle="40"
        path="/grades/3"
      />
    </div>
  );
};

export default AllGrades;
