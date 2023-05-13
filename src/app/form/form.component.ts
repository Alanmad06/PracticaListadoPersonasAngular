import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  //Output nos sirve para enviar informacion al componente padre en este caso se envia una persona creada a partir del formulario html
  @Output() personaCreada = new EventEmitter<Persona>() // El evento se encarga de enviar el dato tipo persona "personaCreada"
/*
Con TwoWayBinding : 
  nombreInput:string =""
  apellidoInput:string =""
  
  
  agregarPersonas(){

    let persona1 = new Persona(this.nombreInput, this.apellidoInput)
    //this.personas.push(persona1)
    this.personaCreada.emit(persona1)
  }*/

  //Decorador ViewChild nos ayuda a sacar la info de los inputs mediante su nombre (#) 
  // en el () se pone el nombre de los inputs a continuacion declaras la variable de tipo ElementRef

  @ViewChild("nombreInput") nombreInput: ElementRef
  @ViewChild("apellidoInput") apellidpInput: ElementRef

  /*
  Con Local Reference : 
  agregarPersonas(nombreInput:HTMLInputElement,apellidoInput:HTMLInputElement){

    let persona1 = new Persona(nombreInput.value, apellidoInput.value)
    //this.personas.push(persona1)
    this.personaCreada.emit(persona1)
  }*/
 
  // Con ViuwChild : 
  agregarPersonas(){

    let persona1 = new Persona(this.nombreInput.nativeElement.value,this.apellidpInput.nativeElement.value)
    //this.personas.push(persona1)
    this.personaCreada.emit(persona1)
  }

}
