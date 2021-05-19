import React, { useEffect } from 'react';
import './SubjectItem.scss';
import MaterialItem from '../MaterialItem/MaterialItem';
import { useSelector, useDispatch } from 'react-redux';
import { getMaterials, getMaterial, createMaterial } from '../../store/actions/material';

const SubjectItem = ({ subjectData, callbackFormStatus }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMaterials());
  }, []);
  const store = useSelector((state) => state.material);

  let materialsList = store.materials.filter((material) => {
    return material.subjectId === subjectData._id;
  });

  return (
    <div className="subjectItem">
      <h3>{subjectData && subjectData.subjectName}</h3>
      <span
        className="controlBtn"
        onClick={() => {
          callbackFormStatus(
            true,
            'Добавьте материал',
            'POST',
            `http://localhost:3000/api/material`,
            {
              inputs: [
                {
                  name: 'subjectId',
                  text: 'Id  темы',
                  type: 'text',
                  defaultValue: subjectData._id,
                },
                { name: 'materialName', text: 'Название материала', type: 'text' },
                {
                  name: 'materialContent',
                  text: 'Наполнение',
                  type: 'text',
                },
              ],
              buttons: [{ value: 'Добавить материал', method: createMaterial }],
            },
          );
        }}>
        Добавить материал
      </span>
      <ul>
        {materialsList?.map((element) => (
          <MaterialItem key={element._id} subjId={subjectData._id} materialData={element} />
        )) || <li>Материалы отсутсвтуют</li>}
      </ul>
      <div className="defaultDivider"></div>
    </div>
  );
};

export default SubjectItem;
