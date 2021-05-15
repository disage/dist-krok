import React, { useState, useEffect } from 'react';
// import CourseStore from '../../store/course';
import './AdminForm.scss';

const store = new CourseStore();

const AdminForm = ({ editFormStatus, settings }) => {
  useEffect(() => {
    setCourse({ name: settings.name, teacher: settings.teacher });
  }, []);
  let currentItem = store.courses.find((course) => course._id === settings.id);

  const [error, setError] = useState('');
  const [course, setCourse] = useState({ name: '', teacher: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError('');
      await store.changeData(settings.url, course, settings.method);
    } catch {
      setError('Failed to login');
    }
  };
  return (
    <div className="courses">
      <div className="coursesHeader">
        <h2>{settings.title}</h2>
        <span
          onClick={() => {
            editFormStatus(false);
          }}>
          Назад
        </span>
      </div>
      <form className="addCourseForm" method="POST">
        <label htmlFor="name">Имя курса</label>
        <input
          type="text"
          name="name"
          id="newCourseName"
          onChange={handleChange}
          defaultValue={currentItem && currentItem.name}
        />
        <label htmlFor="name">Имя преподователя</label>
        <input
          type="text"
          name="teacher"
          id="newTeacherName"
          onChange={handleChange}
          defaultValue={currentItem ? currentItem.teacher : ''}
        />
        <button onClick={handleSubmit}>Добавить курс</button>
      </form>
    </div>
  );
};

export default AdminForm;
