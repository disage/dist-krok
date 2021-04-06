import React from 'react';
import './SubjectItem.scss';
import MaterialItem from '../MaterialItem/MaterialItem';
import CourseStore from '../../store/course';

import { toJS } from 'mobx';

const store = new CourseStore();

const SubjectItem = ({ subjectData }) => {
  let materialsList = toJS(store.materials).filter((material) => {
    return material.subjectId === subjectData._id;
  });

  return (
    <div className="subjectItem">
      <h3>{subjectData && subjectData.subjectName}</h3>
      <ul>
        {materialsList.length > 0 ? (
          materialsList.map((element) => (
            <MaterialItem key={element._id} subjId={subjectData._id} materialData={element} />
          ))
        ) : (
          <li>Материалы отсутсвтуют</li>
        )}
      </ul>
      <div className="defaultDivider"></div>
    </div>
  );
};

export default SubjectItem;
