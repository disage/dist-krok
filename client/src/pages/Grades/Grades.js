import React from 'react';
import MaterialGradeItem from '../../components/MaterialGradeItem/MaterialGradeItem';
import './Grades.scss';

const Grades = (props) => {
  return (
    <div className="grades">
      <div className="gradesHeader">
        <h2>Алгебра</h2>
        <span className="courseGrade">40</span>
      </div>
      <div className="defaultDivider"></div>
      <MaterialGradeItem _id="60a518e92267885120adfada" materialName="Алгебра" materialGrade="5" />
      <MaterialGradeItem _id="60a518e92267885120adfada" materialName="ООП" materialGrade="3" />
    </div>
  );
};

export default Grades;
