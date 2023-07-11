import { Component, Input, OnInit } from '@angular/core';
import { familiar } from 'src/app/familiar.model';
import { Person } from 'src/app/person.model';
import { Persona } from 'src/app/persona.model';
import { personasService } from 'src/app/personas.service';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
}) 
export class AmigosComponent implements OnInit{ 
  modoEdicionAmigos:number = 1
 
  modoEdicionFamilia:number=1
constructor(private personaService:personasService){

}
@Input()amigos:Person[]
@Input()indice: number
@Input()familiares:familiar[]

ngOnInit(): void {  
  
}




}
