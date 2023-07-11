//Modelo de clases

import { familiar } from "./familiar.model";
import { Person } from "./person.model";

export class Persona{
    
    nombre:string 
    apellido:string
    amigos:Person[]=[] 
    familiares: familiar[]=[]

    constructor(nombre:string,apellido:string){ //Buena practica declarar de que tipo sera la variable para que no sea tipo any

        this.nombre = nombre
        this.apellido = apellido
        

    }
    

    setAmigos(amigos:Person[]){
        this.amigos=amigos
       
    }
    getAmigos(){
        return this.amigos
    }

    //constructor(public persona:Person,public amigos:Person[] ){} //Es lo mismo que declarar las variables y crear un constructor como en la parte de arriba

}