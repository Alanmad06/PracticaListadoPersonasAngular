import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
 //Input recibe variables a partir de la clase padre app-component este envia
 // 2 variables persona e indice mediante el html
  @Input() persona: Persona;
  @Input() indice: number;

}
