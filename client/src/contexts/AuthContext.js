import React, { useContext, useState, useEffect } from 'react';
import { auth, database } from '../firebase';
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const getCourses = () => {
    database
      .child('courses')
      .get()
      .then((snapshot) => {
        setCoursesData(snapshot.val());
      });
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  function logout() {
    return auth.signOut();
  }

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });
  const value = {
    currentUser,
    coursesData,
    login,
    logout,
    getCourses,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
