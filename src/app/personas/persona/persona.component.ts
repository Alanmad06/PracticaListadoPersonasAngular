import { Component,  Input, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { personasService } from '../../personas.service';
import { Person } from 'src/app/person.model';
import { Location } from '@angular/common';
import { familiar } from 'src/app/familiar.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
 //Input recibe variables a partir de la clase padre app-component este envia
 // 2 variables persona e indice mediante el html
  @Input() persona: Persona;
  @Input() indice: number;
  modoEdicion:number=1
  amigo:number=0
  familia:number=0
  
 
  constructor(private personasService:personasService, private location: Location){
  }
  
  ngOnInit(): void {

   this.personasService.cargarAmigos(this.indice).subscribe(
    (amigos:Person[]) =>{
      this.persona.amigos=amigos
     this.personasService.setAmigos(this.indice,this.persona.amigos)
   }
   )
   this.personasService.cargarFamiliar(this.indice).subscribe(
    (familia:familiar[]) =>{
      this.persona.familiares=familia
     this.personasService.setFamiliares(this.indice,this.persona.familiares)
     
   }
   )
  
  }

  emitirSaludo(){

    this.personasService.saludar.emit(this.indice)



  }
  activarAmigos(){
    return (this.amigo=1)
  }
  desactivarAmigos(){
   return ( this.amigo=0)
  }
 activarFamiliares(){
  return (this.familia=1)
 }
 desactivarFamiliares(){
  return (this.familia=0)
 }

}
