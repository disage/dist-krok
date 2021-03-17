import React from 'react';
import './LastMaterialItem.scss';

const LastMaterialItem = ({ date, material, course }) => {
  return (
    <div className="lastMaterialItem">
      <div className="materialWrapper">
        <span className="courseName">{course}</span>
        <div className="materialInfo">
          <span className="materialDate">{date}</span>
          <span>{material}</span>
        </div>
      </div>
      <span className="materialBtn">Перейти</span>
    </div>
  );
};
export default LastMaterialItem;
