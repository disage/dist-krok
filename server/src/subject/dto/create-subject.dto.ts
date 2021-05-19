export class CreateSubjectDto {
  readonly courseId: string;
  readonly subjectName: string;
}

export class EditSubjectDto {
  readonly _id: string;
  readonly courseId: string;
  readonly subjectName: string;
}
