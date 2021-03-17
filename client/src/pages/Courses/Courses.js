import React, { useEffect } from 'react';
import CourseItem from '../../сomponents/CourseItem/CourseItem';
import { useAuth } from '../../contexts/AuthContext';
import './Courses.scss';
// let courses = [
//   {
//     id: '1',
//     courseName: 'OOP',
//     courseTeacher: 'Иванов Иван Иванович',
//     courseSubject: [
//       {
//         courseSubjectId: '1',
//         courseSubjectName: 'Тема 1',
//         courseSubjectMaterial: [
//           { materialId: '1', materialName: 'Лекция 1' },
//           { materialId: '2', materialName: 'Практика 1' },
//         ],
//       },
//       {
//         courseSubjectId: '2',
//         courseSubjectName: 'Тема 2',
//         courseSubjectMaterial: [
//           { materialId: '3', materialName: 'Лекция 2' },
//           { materialId: '4', materialName: 'Лаба 2' },
//         ],
//       },
//     ],
//   },
//   {
//     id: '2',
//     courseName: 'Анализ данных',
//     courseTeacher: 'Петров Петр Петрович',
//     courseSubject: [
//       {
//         courseSubjectId: '3',
//         courseSubjectName: 'Тема 1',
//         courseSubjectMaterial: [
//           { materialId: '5', materialName: 'Лекция 1' },
//           { materialId: '6', materialName: 'Тест 1' },
//         ],
//       },
//       {
//         courseSubjectId: '4',
//         courseSubjectName: 'Тема 2',
//         courseSubjectMaterial: [{ materialId: '7', materialName: 'Лекция 2' }],
//       },
//       {
//         courseSubjectId: '5',
//         courseSubjectName: 'Тема 3',
//         courseSubjectMaterial: [{ materialId: '8', materialName: 'Лекция 3' }],
//       },
//     ],
//   },
// ];
//Получаем массив с id курсов пользователя
// let courses = [
//   {
//     courseId: '1',
//     courseName: 'ООП',
//     courseTeacher: 'Иванов Иван Иванович',
//   },
//   {
//     courseId: '2',
//     courseName: 'Анализ данных',
//     courseTeacher: 'Петров Иван Иванович',
//   },
//   {
//     courseId: '3',
//     courseName: 'Алгебра',
//     courseTeacher: 'Иванов Иван Иванович',
//   },
// ];
const Courses = () => {
  const { getCourses, coursesData } = useAuth();

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="courses">
      <h2>Ваши курсы:</h2>
      <div className="coursesWrapper">
        {coursesData.map((element) => (
          <CourseItem
            key={element.courseId}
            courseData={element}
            secondaryTitle="Преподователь"
            path="/courses/"
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
