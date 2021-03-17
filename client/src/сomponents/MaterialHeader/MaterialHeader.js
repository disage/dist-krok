import React from 'react';
import { Link } from 'react-router-dom';

import './MaterialHeader.scss';

const MaterialHeader = ({ subjName, materialData, isGrade, materialGrade }) => {
  return (
    <Link
      className="matItem"
      to={{
        pathname: '/material/' + materialData.materialId,
        subjectParams: { subjName, materialData },
      }}>
      <p className="matMain">{isGrade ? materialData.materialName : subjName}</p>
      <div className="matSecondary">
        <div className="matSecondaryWrapper">
          <b>{isGrade ? materialGrade : materialData.materialName}</b>
        </div>
      </div>
    </Link>
  );
};

export default MaterialHeader;
