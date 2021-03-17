import React from 'react';
import { Link } from 'react-router-dom';
import './MaterialItem.scss';

const MaterialItem = ({ materialData, subjName }) => {
  return (
    <li className="materialItem">
      <div className="listStyle"></div>
      <Link
        to={{
          pathname: '/material/' + materialData.materialId,
          subjectParams: { subjName, materialData },
        }}>
        {materialData.materialName}
      </Link>
    </li>
  );
};

export default MaterialItem;
