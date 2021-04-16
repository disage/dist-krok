
export class CreateMaterialDto{
    readonly subjectId: string;
    readonly materialName: string;
    readonly materialContent: string;
}
export class EditMaterialsDto{
    readonly subjectId: string;
    readonly materialName: string;
    readonly materialContent: string;
    readonly isTest: boolean;
}
