export class CreateCourseDto {
    readonly name:string;
    readonly teacher:string;
    // readonly subjetcs:[];

}

export class EditCourseDto {
    readonly name:string;
    readonly teacher:string;
    readonly subjetcs:[];
}
