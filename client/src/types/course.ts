export interface ICourse {
    _id: string;
    name: string;
    teacher: string;
}

export interface ISubject{
    _id: string;
    courseId: string;
    subjectName: string;
}
export interface IMaterial{
    _id: string;
    subjectId: string;
    materialName: string;
    materialContent: string;
    isTest:boolean
}

export interface ICourseState {
    courses: ICourse[];
}

