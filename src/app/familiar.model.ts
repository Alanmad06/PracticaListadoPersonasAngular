import { Person } from "./person.model";

export class familiar extends Person{
    
    constructor(public pariente:string, nombre:string,apellido:string){
        super(nombre,apellido)
    }
}