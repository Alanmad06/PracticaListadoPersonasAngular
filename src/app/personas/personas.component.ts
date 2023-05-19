import { Component } from '@angular/core';
import { Persona } from '../persona.model';
import { personasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  personas:Persona[]=[]
 
  constructor(private personasService:personasService,
    private router:Router){

  }
  ngOnInit(): void {
      this.personas=this.personasService.personas
  }

  personaAgregada(persona:Persona){
    this.personasService.agregarPersona(persona)
  }

  agregar(){
this.router.navigate(['personas/agregar'])
  }
 
}
