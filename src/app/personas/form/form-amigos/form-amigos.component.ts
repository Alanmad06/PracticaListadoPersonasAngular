import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { familiar } from 'src/app/familiar.model';
import { Person } from 'src/app/person.model';
import { personasService } from 'src/app/personas.service';

@Component({
  selector: 'app-form-amigos',
  templateUrl: './form-amigos.component.html',
  styleUrls: ['./form-amigos.component.css']
})
export class FormAmigosComponent {

  @Input()amigo : Person
  @Input()familiar : familiar
  @Input()indice : number
  @Input()modoEdicionAmigos :number
  @Input()modoEdicionFamiliar :number
  @Input()indiceAmigos : number
  @Input()indiceFamilia : number

  constructor(private personasService:personasService , private router : Router){}
  
  guardarAmigo(){

    if(this.modoEdicionAmigos!=null && this.modoEdicionAmigos===1){
      this.personasService.modificarAmigos(this.amigo,this.indice,this.indiceAmigos)
    
    }
    else if(this.modoEdicionFamiliar!=null && this.modoEdicionFamiliar===1){
      this.personasService.modificarFamiliar(this.familiar,this.indice,this.indiceFamilia)
    }
    this.router.navigate(['personas']);
  }
  
  eliminarAmigo(){
  
    if(this.modoEdicionAmigos===1){
      this.personasService.eliminarAmigo(this.indice,this.indiceAmigos)
    }
    else if (
      this.modoEdicionFamiliar===1
    ){
      this.personasService.eliminarFamiliar(this.indice,this.indiceFamilia)
    }
    
    this.router.navigate(['personas']);
  }
}
