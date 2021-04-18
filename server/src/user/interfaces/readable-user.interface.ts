export interface IReadableUser {
    readonly email: string;
    status: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly phone: string;
    readonly roles: string[];
    accessToken?: string;
}
