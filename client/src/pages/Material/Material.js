import React, { useEffect, useState } from 'react';
import MaterialHeader from '../../components/MaterialHeader/MaterialHeader';
// import TestItem from '../../сomponents/TestItem/TestItem';
import { useSelector, useDispatch } from 'react-redux';
import './Material.scss';
import {
  getMaterials,
  getMaterial,
  editMaterial,
  createMaterial,
  deleteMaterial,
} from '../../store/actions/material';
import { getSubjects } from '../../store/actions/subject';
import AdminForm from '../../components/AdminForm/AdminForm';

const Material = (props) => {
  let subjectId = window.location.pathname.split('/')[2];
  let materialId = window.location.pathname.split('/')[3];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMaterial(materialId));
    dispatch(getSubjects());
  }, []);
  const materialStore = useSelector((state) => state.material);
  const subjectStore = useSelector((state) => state.subject);

  let currentSubject = subjectStore?.subjects?.filter((subject) => {
    return subject._id === subjectId;
  });

  const [formStatus, setFormStatus] = useState(false);
  const [formProps, setFormProps] = useState({
    title: '',
    method: '',
    url: '',
    fields: {},
    currentItem: {},
  });

  let formStatusHandler = (status, title, method, url, fields, itemId) => {
    dispatch(getMaterial(materialId));
    dispatch(getSubjects());
    let currentItem = itemId ? materialStore.material : {};
    setFormProps({ title, method, url, fields, currentItem });
    setFormStatus(status);
  };
  return (
    <div className="material">
      {formStatus ? (
        <AdminForm editFormStatus={() => formStatusHandler()} settings={formProps} />
      ) : (
        <>
          <div className="adminBtnWrapper">
            <span
              className="addCourseBtn"
              onClick={() => {
                formStatusHandler(
                  true,
                  'Редактировать материал',
                  'PUT',
                  `http://localhost:3000/api/material/${materialId}`,
                  {
                    inputs: [
                      // {
                      //   name: 'subjectId',
                      //   text: 'Id  темы',
                      //   type: 'text',
                      //   defaultValue: subjectId,
                      // },
                      {
                        name: 'id',
                        text: 'Id  материала',
                        type: 'text',
                        defaultValue: materialId,
                      },
                      {
                        name: 'materialName',
                        text: 'Название материала',
                        type: 'text',
                        defaultValue: materialStore?.material?.materialName,
                      },
                      {
                        name: 'materialContent',
                        text: 'Наполнение',
                        type: 'text',
                        defaultValue: materialStore?.material?.materialContent,
                      },
                    ],
                    buttons: [
                      { value: 'Редактировать', method: editMaterial },
                      { value: 'Удалить', method: deleteMaterial },
                    ],
                  },
                );
              }}>
              Редактировать
            </span>
          </div>
          <MaterialHeader
            materialData={materialStore?.material || 'undefind'}
            subjectName={currentSubject[0]?.subjectName || 'undefind'}
          />

          <div className="materialContent">
            {materialStore?.material?.materialContent || 'Контент отсутсвует'}
          </div>
        </>
      )}
    </div>
  );
};

export default Material;
