import React, { useState, useEffect } from 'react';
import CourseItem from '../../components/CourseItem/CourseItem';
import AdminForm from '../../components/AdminForm/AdminForm';
import './Courses.scss';
import { getCourses, editCourse, createCourse, deleteCourse } from '../../store/actions/course';
import { useSelector, useDispatch } from 'react-redux';

const Courses = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
  }, []);
  const store = useSelector((state) => state.course.courses);

  const [formStatus, setFormStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [formProps, setFormProps] = useState({
    title: '',
    method: '',
    url: '',
    fields: {},
    currentItem: {},
  });

  let formStatusHandler = (status, title, method, url, fields, itemId) => {
    // dispatch(getCourses());
    dispatch(getCourses());
    let currentItem = itemId ? store.find((course) => course._id === itemId) : {};
    setFormProps({ title, method, url, fields, currentItem });
    setFormStatus(status);
  };

  let editStatusHandler = () => {
    if (editStatus) {
      setEditStatus(false);
    } else {
      setEditStatus(true);
    }
  };

  return (
    <div className="courses">
      {formStatus ? (
        <AdminForm editFormStatus={() => formStatusHandler()} settings={formProps} />
      ) : (
        <div className="coursesPage">
          <div className="coursesHeader">
            <h2>Ваши курсы:</h2>
            <div className="adminBtnWrapper">
              <span className="addCourseBtn" onClick={editStatusHandler}>
                Редактировать
              </span>
              <span
                className="addCourseBtn"
                onClick={() => {
                  formStatusHandler(
                    true,
                    'Добавьте курс',
                    'POST',
                    `http://localhost:3000/api/courses/create`,
                    {
                      inputs: [
                        { name: 'name', text: 'Название курса', type: 'text' },
                        { name: 'teacherId', text: 'Id преподователя', type: 'text' },
                        { name: 'groupsId', text: 'groupsId', type: 'text' },
                      ],
                      buttons: [{ value: 'Добавить курс', method: createCourse }],
                    },
                  );
                }}>
                Добавить
              </span>
            </div>
          </div>
          <div className="coursesWrapper">
            {store?.map((course) => (
              <div key={course._id} className="courseItemWrapper">
                {editStatus && (
                  <svg
                    onClick={() => {
                      formStatusHandler(
                        true,
                        'Внесите изменения:',
                        'PUT',
                        `http://localhost:3000/api/courses/${course._id}`,
                        {
                          inputs: [
                            {
                              name: 'id',
                              text: 'Id  курса',
                              type: 'text',
                              defaultValue: course._id,
                            },
                            {
                              name: 'name',
                              text: 'Название курса',
                              type: 'text',
                              defaultValue: course.name,
                            },
                            {
                              name: 'teacherId',
                              text: 'Id преподователя',
                              type: 'text',
                              defaultValue: course.teacherId,
                            },
                            {
                              name: 'groupsId',
                              text: 'groupsId',
                              type: 'text',
                              defaultValue: course.groupsId,
                            },
                          ],
                          buttons: [
                            { value: 'Редактировать курс', method: editCourse },
                            { value: 'Удалить курс', method: deleteCourse },
                          ],
                        },
                        course._id,
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
                <CourseItem
                  // key={course._id}
                  courseData={course}
                  secondaryTitle="Преподователь"
                  path={`/courses/${course._id}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
