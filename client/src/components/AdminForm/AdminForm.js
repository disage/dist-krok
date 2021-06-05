import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import './AdminForm.scss';
import { Editor } from '@tinymce/tinymce-react';

const AdminForm = ({ editFormStatus, settings, type }) => {
  const [item, setItem] = useState({});
  const [materialContent, setMaterialContent] = useState({});

  useEffect(() => {
    settings?.fields?.inputs?.map((item) => {
      if (item.name === 'materialContent'){
        return setMaterialContent((prevState) => ({
          ...prevState,
          value: item.defaultValue,
        }));
      }
      item.defaultValue &&
        setItem((prevState) => ({
          ...prevState,
          [item.name]: item.defaultValue,
        }));
      return 0;
    });
  }, []);
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const dispatch = useDispatch();

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditorChange = (value) => {
    setItem((prevState) => ({
      ...prevState,
      "materialContent": value,
    }));
  }

  const handleSubmit = async (method) => {
    try {
      setError('');
      await dispatch(method(item));
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
          type === 'material' & item.name === 'materialContent' && (
            <Editor
              key={item.name}
              initialValue={materialContent.value}
              apiKey="2gu4ndvf4r33jvmnz0rkrvy7lrt26od89emjyo68oaqx3k9s"
              init={{
                width: '100%',
                height: 500,
                menubar: true,
                plugins: [
                  'advlist autolink lists link image charmap print anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
              onEditorChange={handleEditorChange}
            />
          ) || (
          <div className="inputWrapper" key={item.name}>
            <label htmlFor={item.name}>{item.text}</label>
            <input
              type={item.type}
              name={item.name}
              onChange={handleChange}
              defaultValue={item.defaultValue}
            />
          </div>
        )))}
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
