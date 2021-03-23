// import { makeAutoObservable } from 'mobx';

// class Course {
//   courses = [];
//   constructor() {
//     makeAutoObservable(this);
//   }

//   async getAllCourses() {
//     await fetch(`http://localhost:5000/courses`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         this.courses = data;
//       });
//     //  console.log(data)
//   }
// }
// export default new Course();
