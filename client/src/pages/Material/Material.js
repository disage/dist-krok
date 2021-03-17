import React from 'react';
import MaterialHeader from '../../сomponents/MaterialHeader/MaterialHeader';
import TestItem from '../../сomponents/TestItem/TestItem';
import './Material.scss';

const Material = (props) => {
  let getAnswerData = (e) => {
    e.preventDefault();
    // let radio = document.getElementsByClassName('answerRadio');
    // for (let i = 0; i < radio.length; i++) {
    //   if (radio[i].checked) {
    //     console.log(radio[i].value);
    //   }
    // }
  };
  return (
    <div className="material">
      <MaterialHeader
        materialData={props.location.subjectParams.materialData}
        subjName={props.location.subjectParams.subjName}
      />
      {props.location.subjectParams.materialData.isTest ? (
        <form className="materialContent">
          <TestItem
            quastionName="Вопрос 1"
            quastionId="1"
            quastionContent="2 + 2 ="
            answerList={[1, 2, 3, 4]}
          />
          <TestItem
            quastionName="Вопрос 2"
            quastionId="2"
            quastionContent="Первая буква алфавита:"
            answerList={['a', 'b', 'c', 'd']}
          />
          <TestItem
            quastionName="Вопрос 3"
            quastionId="3"
            quastionContent="111 - 2 ="
            answerList={[109, 111, 132, 0]}
          />
          <button type="submit" id="finishTest" onClick={getAnswerData}>
            Завершить тест
          </button>
        </form>
      ) : (
        <div className="materialContent">content</div>
      )}
    </div>
  );
};

export default Material;
