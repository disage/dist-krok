import React from 'react';
import { Link } from 'react-router-dom';

import './MaterialHeader.scss';

const MaterialHeader = ({ subjectName, materialData }) => {
  return (
    <Link
      className="matItem"
      to={{
        pathname: '/courses/',
      }}>
      <p className="matMain">{subjectName}</p>
      <div className="matSecondary">
        <div className="matSecondaryWrapper">
          <b>{materialData.materialName}</b>
        </div>
      </div>
    </Link>
  );
};

export default MaterialHeader;
