import React from 'react';
import MaterialHeader from '../../сomponents/MaterialHeader/MaterialHeader';
import './Grades.scss';

const Grades = (props) => {
  return (
    <div className="grades">
      <div className="gradesHeader">
        <h2>{props.location.courseParams.courseData.courseName}</h2>
        <span className="courseGrade">{props.location.courseParams.secondaryTitle}</span>
      </div>
      <div className="defaultDivider"></div>
      <MaterialHeader
        isGrade={true}
        subjName="Тема 1"
        materialGrade="5"
        materialData={{
          materialId: 1,
          materialName: 'Лекция 1',
        }}
      />
      <MaterialHeader
        isGrade={true}
        subjName="Тема 1"
        materialGrade="3"
        materialData={{
          materialId: 2,
          materialName: 'Практика 1',
        }}
      />
    </div>
  );
};

export default Grades;
