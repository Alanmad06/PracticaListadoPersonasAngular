//Servicios : nos ayudan a conectar informacion entre componentes en este caso
// la informacion del form se inserta directamente en el arreglo personas con el metodo de agregarPersona
// y el app-component toma directamente la info de este mismo arreglo

import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { loggingService } from './loggingService.service';
import { Persona } from './persona.model';
import { dataServices } from './data.services';
import { Person } from './person.model';
import { familiar } from './familiar.model';
//Para agregar un servicio dentro de otro servicio se utiliza @Injectable() en la clase que se quiere inyectar
@Injectable()
export class personasService {
  personas: Persona[] = [];
  saludar = new EventEmitter<number>();

  //DI Dependency Injection
  constructor(
    private loggingService: loggingService,
    private dataServices: dataServices
  ) {
   
  }

  setPersonas(personas: Persona[]) {
    this.personas = personas;

  }

  setAmigos(index:number,amigos:Person[]){
    this.personas[index].amigos=Object.values(amigos || {})
  }
  setFamiliares(index:number,familiares:familiar[]){
    this.personas[index].familiares=Object.values(familiares || {})
  }
 

  cargarPersonas() {
    return this.dataServices.cargarPersonas();
  }
  cargarAmigos(index:number){
    return this.dataServices.cargarAmigos(index)
  }
  cargarFamiliar(index:number){
    return this.dataServices.cargarFamiliares(index)
  }
  cargarAmigosLocal(index:number){
    return this.personas[index].amigos
  }


  agregarPersona(persona: Persona) {
    this.loggingService.imprimirLog('Nombre :' + persona.nombre);
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1: Persona = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
   
    this.dataServices.modificarPersona(index, persona1);
    //Con esto se cambia ya que se pasan valores por referencia no hace falta meterlo otra vez al arreglo this.personas[index]=persona1
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    this.regenerarPersonas();
  }

  regenerarPersonas() {
    if (this.personas != null) {
      this.dataServices.guardarPersonas(this.personas);
    }
  }
  modificarAmigos(amigo:Person,index:number,indexA:number){
   let amigoaux:Person= this.personas[index].amigos[indexA]
   amigoaux.nombre=amigo.nombre
   amigoaux.apellido=amigo.apellido
   this.dataServices.modificarAmigo(amigoaux,index,indexA) //amigo->amigoaux
    
  }
  modificarFamiliar(familiar:familiar,index:number,indexF:number){
    let familiaraux:familiar= this.personas[index].familiares[indexF]
    familiaraux.nombre=familiar.nombre
    familiaraux.apellido=familiar.apellido
    familiaraux.pariente=familiar.pariente
    this.dataServices.modificarFamilia(familiaraux,index,indexF)
    this.regenerarPersonas()

  }
  eliminarAmigo(index:number,indexA:number){

    this.personas[index].amigos.splice(indexA,1)
    this.personas[index].amigos.forEach(amigo=>{
      console.log(amigo.nombre)
    })
    this.dataServices.eliminarAmigo(index,indexA)
    
    this.regenerarPersonas();
  }
  eliminarFamiliar(index:number,indexF:number){
    this.personas[index].familiares.splice(indexF,1)
    this.dataServices.eliminarFamiliar(index,indexF)
    this.regenerarPersonas();
  }
  agregarAmigos(index:number,amigo:Person){
  if( this.personas[index].amigos==null){
    this.personas[index].amigos=[];
  }
    this.personas[index].amigos.push(amigo)
    this.personas[index].amigos.forEach((amigo=>{
      console.log(amigo.nombre)
    }))
    this.dataServices.guardarAmigo(amigo,index)
    this.regenerarPersonas();
  }

  agregarFamiliar(index:number,familiar:familiar){
    if( this.personas[index].familiares==null){
      this.personas[index].familiares=[];
    }
      this.personas[index].familiares.push(familiar)
      this.dataServices.guardarFamiliar(familiar,index)
      this.regenerarPersonas();
  }
  
}
