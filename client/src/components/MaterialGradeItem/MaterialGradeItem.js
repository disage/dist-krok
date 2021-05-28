import React from 'react';
import { Link } from 'react-router-dom';
import './MaterialGradeItem.scss';

const MaterialGradeItem = ({ materialName, materialGrade, _id }) => {
  return (
    <Link
      className="materialGradeItem"
      to={{
        pathname: `/material/${_id}`,
      }}>
      <p className="materialName">{materialName}</p>
      <b className="materialGrade">{materialGrade}</b>
    </Link>
  );
};

export default MaterialGradeItem;
