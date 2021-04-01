import React from 'react';
import { Link } from 'react-router-dom';
import './MaterialItem.scss';

const MaterialItem = ({ materialData, subjId }) => {
  return (
    <li className="materialItem">
      <div className="listStyle"></div>
      <Link
        to={{
          pathname: '/material/' + subjId + '/' + materialData.materialId,
          // subjectParams: { subjId },
        }}>
        {materialData.materialName}
      </Link>
    </li>
  );
};

export default MaterialItem;
