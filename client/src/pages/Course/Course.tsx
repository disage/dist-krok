import React, { useEffect,useState } from 'react';
import CourseItem from '../../components/CourseItem/CourseItem';
import SubjectItem from '../../components/SubjectItem/SubjectItem';
import { useSelector, useDispatch } from 'react-redux';
import { getSubject, editSubject, createSubject, deleteSubject} from '../../store/actions/subject';
import { getCourse} from '../../store/actions/course';
import AdminForm from '../../components/AdminForm/AdminForm';
import './Course.scss';

const Course = () => {
  const dispatch = useDispatch();

  const courseStore = useSelector((state:any) => state.course);
  const subjectStore = useSelector((state:any) => state.subject);
  let courseId:string = window.location.pathname.split("/courses/")[1];
  // let currentCourse:any = store?.subjects?.find((subject:any) => subject._id === courseId);
  let currentCourse:any = courseStore.course;
  useEffect(() => {
    dispatch(getCourse(courseId));
    dispatch(getSubject(courseId));
  }, []);

  const [formStatus, setFormStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [formProps, setFormProps] = useState({
    title: '',
    method: '',
    url: '',
    fields: {},
    currentItem: {},
  });
  let formStatusHandler = (status?:any, title?:any, method?:any, url?:any, fields?:any, itemId?:any) => {
    dispatch(getSubject(courseId));
    let currentItem = itemId ? subjectStore.subjects.find((subject:any) => subject._id === itemId) : {};
    setFormProps({ title, method, url, fields, currentItem });
    setFormStatus(status);
  };

  let editStatusHandler = () => {
    editStatus ? setEditStatus(false) : setEditStatus(true);
  };
  return (
    <div className="course">
    {formStatus ? (
      <AdminForm editFormStatus={() => formStatusHandler()} settings={formProps} />
    ) : (
      <>
        <div className="adminBtnWrapper">
          <span className="addCourseBtn" onClick={editStatusHandler}>
            Редактировать
          </span>
          <span
            className="addCourseBtn"
            onClick={() => {
              formStatusHandler(
                true,
                'Добавьте тему',
                'POST',
                `http://localhost:3000/api/subject`,
                {
                  inputs: [
                    {
                      name: 'courseId',
                      text: 'Id курса',
                      type: 'text',
                      defaultValue: courseId,
                    },
                    { name: 'subjectName', text: 'Название темы', type: 'text' },
                  ],
                  buttons: [{ value: 'Добавить тему', method: createSubject }],
                },
              );
            }}>
            Добавить тему
          </span>
        </div>
        <CourseItem courseData={currentCourse} secondaryTitle="Преподователь" path="/courses/" />
        <div className="subjectsWrapper">
          {subjectStore?.subjects?.map((element:any) => (
            <div key={element._id} className="subjectWrapper">
              {editStatus && (
                <svg
                  className="editBtn"
                  onClick={() => {
                    formStatusHandler(
                      true,
                      'Внесите изменения:',
                      'PUT',
                      `http://localhost:3000/api/subject/${element._id}`,
                      {
                        inputs: [
                          {
                            name: 'id',
                            text: 'Id темы',
                            type: 'text',
                            defaultValue: element._id,
                          },
                          {
                            name: 'courseId',
                            text: 'Id курса',
                            type: 'text',
                            defaultValue: element.courseId,
                          },
                          {
                            name: 'subjectName',
                            text: 'Название темы',
                            type: 'text',
                            defaultValue: element.subjectName,
                          },
                        ],
                        buttons: [
                          { value: 'Редактировать тему', method: editSubject },
                          { value: 'Удалить тему', method: deleteSubject },
                        ],
                      },
                      element._id,
                    );
                  }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 2.61645C20 1.1714 18.8286 0 17.3835 0H2.61645C1.1714 0 0 1.1714 0 2.61645V17.3834C0 18.8286 1.1714 20 2.61645 20H17.3834C18.8286 20 20 18.8286 20 17.3835V2.61645ZM4.48935 16.3314C4.05602 16.4476 3.65946 16.0511 3.7757 15.6177L4.4943 12.9392L7.16774 15.6127L4.48935 16.3314ZM16.0351 6.59065L8.1228 14.503L5.46161 11.8418L13.3739 3.92957C13.7491 3.5543 14.3574 3.5543 14.7327 3.92957L16.0351 5.23194C16.4102 5.6071 16.4102 6.21538 16.0351 6.59065Z"
                    fill="#575C69"
                  />
                </svg>
              )}
              <SubjectItem
                key={element._id}
                subjectData={element}
                callbackFormStatus={formStatusHandler}
              />
            </div>
          )) || <p>Темы остсутсвуют</p>}
        </div>
      </>
    )}
  </div>
  );
};

export default Course;
