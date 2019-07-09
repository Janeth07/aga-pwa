export interface Roles{
    ganadero?:boolean;
    admin?:boolean;
}

export interface User {
    id?:string;
    name?:string;
    password?:string;
    roles:Roles;
}
