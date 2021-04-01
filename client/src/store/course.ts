import {makeAutoObservable, toJS} from "mobx"
import {ICourse, ISubject} from '../types/course';

export default class CourseStore {
  courses: ICourse[] = [];
  subjects: ISubject[] = [];

  constructor(url: string = '') {
    makeAutoObservable(this)
    this.loadCourses(url);
    this.loadSubjects(url);
  }

  loadCourses(url: string) {
    fetch(`http://localhost:5000/courses${url}`)
      .then(res => res.json())
      .then(json => {
        this.courses = json
        // console.log(toJS(this.courses));
      })
  }

  loadSubjects(url: string) {
    fetch(`http://localhost:5000/subjects${url}`)
      .then(res => res.json())
      .then(json => {
        this.subjects = json
      })
  }
}
