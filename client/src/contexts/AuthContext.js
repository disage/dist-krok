// import React, { useContext, useState, useEffect } from 'react';
// // import { auth, database } from '../firebase';

// const AuthContext = React.createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState();
//   console.log(currentUser);
//   // const [coursesData, setCoursesData] = useState([]);

//   // useEffect(() => {
//   //   const unsubscribe = auth.onAuthStateChanged((user) => {
//   //     setCurrentUser(user);
//   //   });

//   //   return unsubscribe;
//   // }, []);

//   // const getCourses = () => {
//   //   database
//   //     .child('courses')
//   //     .get()
//   //     .then((snapshot) => {
//   //       setCoursesData(snapshot.val());
//   //     });
//   // };

//   const login = (email, password) => {
//     if (email && password) {
//       setCurrentUser({ email: email, password: password });
//       console.log('ok');
//     }
//   };

//   const logout = () => {
//     setCurrentUser(null);
//   };

//   // auth.onAuthStateChanged((user) => {
//   //   setCurrentUser(user);
//   // });

//   const value = {
//     currentUser,
//     // coursesData,
//     login,
//     logout,
//     // getCourses,
//   };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
