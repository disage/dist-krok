import React from 'react';
import './SubjectItem.scss';
import MaterialItem from '../MaterialItem/MaterialItem';

const SubjectItem = ({ subjectData }) => {
  // const materialItems =
  return (
    <div className="subjectItem">
      <h3>{subjectData && subjectData.subjectName}</h3>
      <ul>
        {subjectData.materials ? (
          subjectData.materials.map((element) => (
            <MaterialItem
              key={element.materialId}
              subjId={subjectData.subjectId}
              materialData={element}
            />
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
