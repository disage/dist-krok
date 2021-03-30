import React, { useEffect } from 'react';
import MaterialHeader from '../../сomponents/MaterialHeader/MaterialHeader';
// import TestItem from '../../сomponents/TestItem/TestItem';
import CourseStore from '../../store/course';
import { toJS } from 'mobx';
import './Material.scss';

const Material = (props) => {
  // let getAnswerData = (e) => {
  //   e.preventDefault();
  //   // let radio = document.getElementsByClassName('answerRadio');
  //   // for (let i = 0; i < radio.length; i++) {
  //   //   if (radio[i].checked) {
  //   //     console.log(radio[i].value);
  //   //   }
  //   // }
  // };

  let subjectId = window.location.pathname.split('/')[2];
  let materialId = window.location.pathname.split('/')[3];
  let _currentSubject = toJS(CourseStore.subjects.subjects).find(
    (element) => element.subjectId === subjectId,
  );
  let _surrentMaterial = toJS(
    _currentSubject.materials.find((element) => element.materialId === materialId),
  );
  useEffect(() => {}, []);
  // console.log(_surrentMaterial);
  return (
    <div className="material">
      <MaterialHeader materialData={_surrentMaterial} subjName={_currentSubject.subjectName} />
      {
        // <form className="materialContent">
        //   <TestItem
        //     quastionName="Вопрос 1"
        //     quastionId="1"
        //     quastionContent="2 + 2 ="
        //     answerList={[1, 2, 3, 4]}
        //   />
        //   <button type="submit" id="finishTest" onClick={getAnswerData}>
        //     Завершить тест
        //   </button>
        // </form>
        <div className="materialContent">asd{_surrentMaterial.materialContent}</div>
      }
    </div>
  );
};

export default Material;
