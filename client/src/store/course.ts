import {makeObservable, observable, action, makeAutoObservable} from "mobx"
import {ICourse} from '../types/course';

export default class CourseStore {
  courses: ICourse[] = [];

  constructor(url: string = '') {
    makeAutoObservable(this)
    this.loadCourses(url);
  }

  loadCourses(url: string) {
    fetch(`http://localhost:5000/courses${url}`)
      .then(res => res.json())
      .then(json => {
        this.courses = json
      })
    console.log(this.courses);
  }
}
