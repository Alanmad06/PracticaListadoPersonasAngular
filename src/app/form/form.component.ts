import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { loggingService } from '../loggingService.service';
import { personasService } from '../personas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 

  constructor(private personasService : personasService){
    //Con este service nos podemos suscribir al saludo que envia el componente persona , el componente se suscribe al emitter y puede
    // "escuchar lo que se manda del html persona"
    this.personasService.saludar.subscribe(
      (indice:number) => {alert("el indice es "+(indice+1))}
    )

  }

  @ViewChild("nombreInput") nombreInput: ElementRef
  @ViewChild("apellidoInput") apellidpInput: ElementRef

  

  
  
  agregarPersonas(){

    let persona1 = new Persona(this.nombreInput.nativeElement.value,this.apellidpInput.nativeElement.value)
    this.personasService.agregarPersona(persona1)

  }

}
