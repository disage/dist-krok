export interface ICourse {
    _id: string;
    name: string;
    teacher: string;
    subjects: [{subjectId:string, subjectName:string}];
}

export interface ICourseState {
    courses: ICourse[];
}

