import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './AdminForm.scss';

// const store = new CourseStore();

const AdminForm = ({ editFormStatus, settings }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    settings.fields.inputs.map((item) => {
      // item.defaultValue && setItem({ [item.name]: item.defaultValue });
      item.defaultValue &&
        setItem((prevState) => ({
          ...prevState,
          [item.name]: item.defaultValue,
        }));
      return 0;
    });
  }, []);

  const dispatch = useDispatch();

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (method) => {
    try {
      setError('');
      dispatch(method(item));
      editFormStatus(false);
    } catch {
      setError('Failed to change data');
    }
  };
  return (
    <>
      <div className="formHeader">
        <h2>{settings.title}</h2>
        <span
          onClick={() => {
            editFormStatus(false);
          }}>
          Назад
        </span>
      </div>
      <form className="adminForm" method="POST">
        {settings?.fields?.inputs?.map((item) => (
          <div className="inputWrapper" key={item.name}>
            <label htmlFor={item.name}>{item.text}</label>
            <input
              type={item.type}
              name={item.name}
              onChange={handleChange}
              defaultValue={item.defaultValue}
            />
          </div>
        ))}
        <div className="btnWrapper">
          {settings?.fields?.buttons?.map((item) => (
            <button
              key={item.value}
              className="adminFormBtn"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit(item.method);
              }}>
              {item.value}
            </button>
          ))}
        </div>
      </form>
    </>
  );
};

export default AdminForm;
