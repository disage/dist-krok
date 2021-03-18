import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Courses from './pages/Courses/Courses';
import Course from './pages/Course/Course';
import Material from './pages/Material/Material';
import AllGrades from './pages/AllGrades/AllGrades';
import Grades from './pages/Grades/Grades';
import Login from './pages/Login/Login';
import Sidebar from './сomponents/Sidebar/Sidebar';
import auth from './store/auth';
import { observer } from 'mobx-react-lite';

import './App.scss';

const App = observer(() => {
  return (
    <BrowserRouter>
      {!auth.isLoggined ? (
        <Login />
      ) : (
        <div className="app">
          <Sidebar />
          <Route path="/" exact component={Main} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/courses/:number" component={Course} />
          <Route path="/material/:number" component={Material} />
          <Route path="/grades" exact component={AllGrades} />
          <Route path="/grades/:number" component={Grades} />
        </div>
      )}
    </BrowserRouter>
  );
});
export default App;
