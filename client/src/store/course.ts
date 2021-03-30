import { makeAutoObservable,  toJS } from 'mobx';
import { ICourse } from '../types/course';

class Course {

  courses: ICourse[] = [];
  error:any= {};
  subjects: ICourse = {_id: '', name:'', teacher:'', subjects: [{subjectId:'', subjectName:'', materials:[{materialId:'', materialName:'', materialContent: ''}]}]};
  constructor() {
    makeAutoObservable(this);
  }

   getAllCourses(url:string)  {
    fetch(`http://localhost:5000/courses${url}`)
    .then(response => {
      return response.json() 
    })
    .then(data => {
      if(url === '/')
      this.courses = toJS(data);
      else {
        this.subjects = toJS(data);
      }
      // console.log(toJS(this.courses));
    })
  }


}
export default new Course();
