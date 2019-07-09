export interface CategoriaAnimal{
  destete?:boolean;
  vientre?:boolean;
  semental?:boolean;
  coordero?:boolean
}
export interface Corrales{
id?:string,
numero?:number,
aloja?:CategoriaAnimal,
descripcion?:string
}