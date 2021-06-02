import React from 'react';
import { editUser, deleteUser } from '../../store/actions/user';

const UserItem = ({
  _id,
  firstName,
  lastName,
  phone,
  roles,
  email,
  status,
  password,
  setFormStatusFunc,
}) => {
  return (
    <tr>
      <td>
        <svg
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setFormStatusFunc(
              true,
              'Внесите изменения:',
              'PUT',
              `http://localhost:3000/api/user/`,
              {
                inputs: [
                  {
                    name: 'id',
                    text: 'Id  курса',
                    type: 'text',
                    defaultValue: _id,
                  },
                  {
                    name: 'firstName',
                    text: 'Имя',
                    type: 'text',
                    defaultValue: firstName,
                  },
                  {
                    name: 'lastName',
                    text: 'Фамилия',
                    type: 'text',
                    defaultValue: lastName,
                  },
                  {
                    name: 'phone',
                    text: 'phone',
                    type: 'text',
                    defaultValue: phone,
                  },
                  {
                    name: 'email',
                    text: 'email',
                    type: 'email',
                    defaultValue: email,
                  },
                  {
                    name: 'roles',
                    text: 'roles',
                    type: 'text',
                    defaultValue: roles,
                  },
                  {
                    name: 'status',
                    text: 'status',
                    type: 'text',
                    defaultValue: status,
                  },
                  {
                    name: 'password',
                    text: 'password',
                    type: 'text',
                    defaultValue: password,
                  },
                ],
                buttons: [
                  { value: 'Сохранить', method: editUser },
                  { value: 'Удалить', method: deleteUser },
                ],
              },
              _id,
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
      </td>
      <td>{firstName + ' ' + lastName}</td>
      <td>ІПЗР-17к</td>
      <td>4 курс</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{roles}</td>
    </tr>
  );
};

export default UserItem;
