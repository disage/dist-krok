import React from 'react';
import './TestItem.scss';

const TestItem = ({ quastionName, quastionId, quastionContent, answerList }) => {
  const answerItems = answerList.map((item) => (
    <div className="answerItem" key={item}>
      <input className="answerRadio" type="radio" name={quastionId} value={item} />
      <label htmlFor={quastionId}>{item}</label>
    </div>
  ));
  return (
    <div className="testItem">
      <h3>{quastionName}</h3>
      <p>{quastionContent}</p>
      <div className="testAnswerList">{answerItems}</div>
    </div>
  );
};

export default TestItem;
