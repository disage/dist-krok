import {makeAutoObservable, toJS} from "mobx"
import {ICourse, ISubject, IMaterial} from '../types/course';

export default class CourseStore {
  courses: ICourse[] = [];
  subjects: ISubject[] = [];
  materials: IMaterial[] = [];
  materialContent: IMaterial[] = []

  constructor(url: string = '') {
    makeAutoObservable(this)
    this.loadCourses(url);
    this.loadSubjects(url);
    this.loadMaterials(url);
  }

  loadCourses(url: string) {
    fetch(`http://localhost:5000/courses${url}`)
      .then(res => res.json())
      .then(json => {
        this.courses = json
      })
  }

  loadSubjects(url: string) {
    fetch(`http://localhost:5000/subjects${url}`)
      .then(res => res.json())
      .then(json => {
        this.subjects = json
      })
  }

  loadMaterials(url: string) {
    fetch(`http://localhost:5000/materials${url}`)
      .then(res => res.json())
      .then(json => {
        this.materials = json
        // console.log(toJS(this.materials));
      })
  }
  loadMaterialContent(url: string) {
    fetch(`http://localhost:5000/materialContent${url}`)
      .then(res => res.json())
      .then(json => {
        this.materialContent = json
      })
  }
}
