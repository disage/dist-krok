import React from 'react';
import { Link } from 'react-router-dom';
import './MaterialItem.scss';

const MaterialItem = ({ materialData, subjId }) => {
  // useEffect(() => {}, []);
  return (
    <li className="materialItem">
      <div className="listStyle"></div>
      <Link
        to={{
          pathname: '/material/' + subjId + '/' + materialData._id,
          // subjectParams: { subjId },
        }}>
        {materialData.materialName}
      </Link>
    </li>
  );
};

export default MaterialItem;
