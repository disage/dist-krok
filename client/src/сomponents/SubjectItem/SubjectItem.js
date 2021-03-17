import React from 'react';
import './SubjectItem.scss';
import MaterialItem from '../MaterialItem/MaterialItem';

const SubjectItem = ({ subjectData }) => {
  const materialItems = subjectData.subjectMaterial.map((element) => (
    <MaterialItem
      key={element.materialId}
      subjName={subjectData.subjectName}
      materialData={element}
    />
  ));
  return (
    <div className="subjectItem">
      <h3>{subjectData.subjectName}</h3>
      <ul>{materialItems}</ul>
      <div className="defaultDivider"></div>
    </div>
  );
};

export default SubjectItem;
