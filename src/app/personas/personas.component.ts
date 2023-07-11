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
    //this.personas=this.personasService.personas
      this.personasService.cargarPersonas()
      .subscribe(
        (personas:Persona[]) =>{
           this.personas=personas
          this.personasService.setPersonas(this.personas)
          
        }

        // Con esto nos suscribirmos al metodo cargar personas pq nos da un observable , y con .suscribe obtenemos ya la info
        // que tiene el get de la bd , lo asignamos a el arreglo personas y despues seteamos el arreglo del servicio personas con
        // este arreglo que ya tiene info 
        
  );
  }

  personaAgregada(persona:Persona){
    this.personasService.agregarPersona(persona)
  }

  agregar(){
this.router.navigate(['personas/agregar'])
  }
 
}
