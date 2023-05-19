//Servicios : nos ayudan a conectar informacion entre componentes en este caso 
// la informacion del form se inserta directamente en el arreglo personas con el metodo de agregarPersona
// y el app-component toma directamente la info de este mismo arreglo

import { EventEmitter, Injectable } from "@angular/core";
import { loggingService } from "./loggingService.service";
import { Persona } from "./persona.model";
//Para agregar un servicio dentro de otro servicio se utiliza @Injectable() en la clase que se quiere inyectar
@Injectable()
export class personasService{



    personas : Persona[]=[new Persona("Pepe","Perez"),new Persona("Maria","Lopez"),new Persona("Muyo","Ponce")]
    saludar = new EventEmitter<number>()


    //DI Dependency Injection 
    constructor(private loggingService :loggingService){

    }

    agregarPersona(persona : Persona){
        this.loggingService.imprimirLog("Nombre :"+persona.nombre)
        this.personas.push(persona)
      }
    encontrarPersona(index:number){
      let persona: Persona = this.personas[index]
      return persona
    }
    modificarPersona(index:number, persona:Persona){
      let persona1: Persona = this.personas[index]
       persona1.nombre=persona.nombre
       persona1.apellido=persona.apellido
       
       //Con esto se cambia ya que se pasan valores por referencia no hace falta meterlo otra vez al arreglo this.personas[index]=persona1
    }
    eliminarPersona(index:number){
      this.personas.splice(index,1)
    }

}