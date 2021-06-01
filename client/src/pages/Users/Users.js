import React, { useEffect, useState } from 'react';
import UserItem from '../../components/UserItem/UserItem';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, createUser } from '../../store/actions/user';
import AdminForm from '../../components/AdminForm/AdminForm';

import './Users.scss';

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const store = useSelector((state) => state.user.users);

  const [formStatus, setFormStatus] = useState(false);
  const [formProps, setFormProps] = useState({
    title: '',
    method: '',
    url: '',
    fields: {},
    currentItem: {},
  });
  let formStatusHandler = (status, title, method, url, fields, itemId) => {
    dispatch(getUsers());
    let currentItem = itemId ? store.find((user) => user._id === itemId) : {};
    setFormProps({ title, method, url, fields, currentItem });
    setFormStatus(status);
  };
  return (
    <div className="users">
      {formStatus ? (
        <AdminForm editFormStatus={() => formStatusHandler()} settings={formProps} />
      ) : (
        <>
          <div className="usersHeader">
            <h2>Список пользователей:</h2>
            <span
              onClick={() => {
                formStatusHandler(
                  true,
                  'Зарегистрируйте пользователя',
                  'POST',
                  `http://localhost:3000/api/user/create`,
                  {
                    inputs: [
                      { name: 'email', text: 'Email', type: ' email' },
                      // { name: 'status', text: 'Статус', type: 'text' },
                      { name: 'firstName', text: 'Имя', type: 'text' },
                      { name: 'lastName', text: 'Фамилия', type: 'text' },
                      { name: 'phone', text: 'Телефон', type: 'text' },
                      { name: 'roles', text: 'Роль', type: 'text' },
                      { name: 'password', text: 'Пароль', type: 'text' },
                    ],
                    buttons: [{ value: 'Зарегестрировать', method: createUser }],
                  },
                );
              }}>
              Добавить
            </span>
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">ФИО</th>
                <th scope="col">Группа</th>
                <th scope="col">Курс</th>
                <th scope="col">Email</th>
                <th scope="col">Телефон</th>
                <th scope="col">Роль</th>
              </tr>
            </thead>
            <tbody>
              {store?.map((user) => (
                <UserItem
                  key={user._id}
                  _id={user._id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  phone={user.phone}
                  email={user.email}
                  roles={user.roles}
                  status={user.status}
                  password={user.password}
                  setFormStatusFunc={formStatusHandler}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Users;
