export class CreateMaterialDto{
    readonly subjectId: string;
    readonly materialName: string;
    readonly materialContent: string;
    readonly isTest:boolean
}
export class EditMaterialDto{
    readonly subjectId: string;
    readonly materialName: string;
    readonly materialContent: string;
    readonly isTest: boolean
}
