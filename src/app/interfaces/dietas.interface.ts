import { Ingredientes } from "./ingredientes.interface";


export interface Dietas{
    id?:string,
    ingredientes?: Ingredientes[],
    nombre?:string,
    raciones_por_dia?: number,
    descripcion?:string,
    corrales?:string[],
    dieta?:string,
}