import React, { useEffect } from 'react';
import MaterialHeader from '../../сomponents/MaterialHeader/MaterialHeader';
// import TestItem from '../../сomponents/TestItem/TestItem';
import CourseStore from '../../store/course';
import { toJS } from 'mobx';
import './Material.scss';
import { observer } from 'mobx-react-lite';

const store = new CourseStore();

const Material = observer((props) => {
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

  useEffect(() => {
    store.loadMaterials(`/${subjectId}`);
    store.loadMaterialContent(`/${materialId}`);
  }, []);

  let currentMaterial = toJS(store.materials).filter((material) => {
    return material._id === materialId;
  });
  let currentSubject = toJS(store.subjects).filter((subject) => {
    return subject._id === subjectId;
  });

  // console.log(toJS(store.materialContent));
  return (
    <div className="material">
      <MaterialHeader
        materialData={currentMaterial[0] ? currentMaterial[0] : ''}
        subjectName={currentSubject[0] ? currentSubject[0].subjectName : ''}
      />
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
        <div className="materialContent">
          {store.materialContent[0]
            ? store.materialContent[0].materialContent
            : 'Контент отсутсвует'}
        </div>
      }
    </div>
  );
});

export default Material;
