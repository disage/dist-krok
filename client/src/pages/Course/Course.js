import React from 'react';
import CourseItem from '../../сomponents/CourseItem/CourseItem';
import SubjectItem from '../../сomponents/SubjectItem/SubjectItem';
import './Course.scss';

const Course = (props) => {
  let subjects = [
    {
      courseId: '1',
      subjectId: '1',
      subjectName: 'Тема 1',
      subjectMaterial: [
        { materialId: '1', materialName: 'Лекция 1', isTest: false },
        { materialId: '2', materialName: 'Практика 1', isTest: false },
      ],
    },
    {
      courseId: '1',
      subjectId: '2',
      subjectName: 'Тема 2',
      subjectMaterial: [
        { materialId: '3', materialName: 'Лекция 2', isTest: false },
        { materialId: '4', materialName: 'Практика 2', isTest: false },
        { materialId: '5', materialName: 'Тест 1', isTest: true },
      ],
    },
  ];

  const subjectItems = subjects.map((element) => (
    <SubjectItem key={element.subjectId} subjectData={element} />
  ));

  return (
    <div className="course">
      <CourseItem
        courseData={props.location.courseParams.courseData}
        secondaryTitle="Преподователь"
      />
      <div className="subjectWrapper">{subjectItems}</div>
    </div>
  );
};

export default Course;
