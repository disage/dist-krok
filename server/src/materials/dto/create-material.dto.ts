import {Subject} from "../../subjects/schema/subject.schema";

export class CreateMaterialDto{
    readonly subjectId: string;
    readonly materialName: string;
    readonly materialContent: string;
    readonly isTest:boolean;
}
export class EditMaterialsDto{
    readonly subjectId: Subject;
    readonly materialName: string;
    readonly materialContent: string;
    readonly isTest: boolean;
}
