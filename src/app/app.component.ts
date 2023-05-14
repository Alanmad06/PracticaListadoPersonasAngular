import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { personasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo ="Listado de Personas"
  personas:Persona[]=[]
 
  constructor(private personasService:personasService){

  }
  ngOnInit(): void {
      this.personas=this.personasService.personas
  }

  personaAgregada(persona:Persona){
    this.personasService.agregarPersona(persona)
  }
 

  
  

}
