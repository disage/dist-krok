export interface ICourse {
    _id: string;
    name: string;
    teacher: string;
    subjects: [{subjectId:string, subjectName:string, materials:[{}]}];
}

export interface ICourseState {
    courses: ICourse[];
}

