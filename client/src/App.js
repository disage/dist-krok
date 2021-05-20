import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './pages/Main/Main';
import Courses from './pages/Courses/Courses';
import Course from './pages/Course/Course';
import Material from './pages/Material/Material';
import AllGrades from './pages/AllGrades/AllGrades';
import Grades from './pages/Grades/Grades';
import Login from './pages/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const { user } = this.props;

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) {
      console.log(isLoggedIn);
      return <Login />;
    }
    return (
      <div className="app">
        <BrowserRouter>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/courses/:number" component={Course} />
            <Route path="/material/:number" component={Material} />
            <Route path="/grades" exact component={AllGrades} />
            <Route path="/grades/:number" component={Grades} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, isLoggedIn } = state.auth;
  return {
    user,
    isLoggedIn,
  };
}

export default connect(mapStateToProps)(App);
