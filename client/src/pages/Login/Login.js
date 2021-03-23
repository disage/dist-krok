import React, { useState } from 'react';
import auth from '../../store/auth';
import { observer } from 'mobx-react-lite';
import './Login.scss';

const Login = observer(() => {
  const [error, setError] = useState('');
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError('');
      await auth.setCurrentUser(user.email, user.password);
    } catch {
      setError('Failed to login');
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>КРОК</h2>
        <span>Атворизуйтесь для работы с приложением</span>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="emailInput"
          name="email"
          value={user.email}
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="passwordInput"
          name="password"
          required
          onChange={handleChange}
          value={user.password}
        />
        <input type="submit" id="loginBtn" value="Log In" />
        <p>{error}</p>
        {/* {currentUser && currentUser.email} */}
      </form>
    </div>
  );
});

export default Login;
