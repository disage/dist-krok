export interface ICourse {
    _id: string;
    name: string;
    teacher: string;
    // subjects: [{subjectId:string, subjectName:string, materials:[{}]}];
}

export interface ISubject{
    _id: string;
    courseId: string;
    subjectName: string;
}

export interface ICourseState {
    courses: ICourse[];
}

