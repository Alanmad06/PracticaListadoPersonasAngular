import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { loggingService } from '../../loggingService.service';
import { personasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  nombreInput: string;
  apellidoInput: string;
  index:number
  modoEdicion:number

  constructor(
    private personasService: personasService,
    private router: Router,
    private route : ActivatedRoute
  ) {
    //Con este service nos podemos suscribir al saludo que envia el componente persona , el componente se suscribe al emitter y puede
    // "escuchar lo que se manda del html persona"
    this.personasService.saludar.subscribe((indice: number) => {
      alert('el indice es ' + (indice + 1));
    });
  }

  ngOnInit(): void {
      this.index = this.route.snapshot.params['id'] //Esto se usa para recuperar la variable que se envio por la ruta en este caso
      // persona component envia el id por la ruta y como esto recuperamos el paramentro id y lo asignamos al index :number
      // este id es el mismo de la ruta app-routing : path:'personas/:id <-este !!!', component:FormComponent 
this.modoEdicion= +this.route.snapshot.queryParams['modoEdicion'] //Con el mas se hace un parseInt de tipo queryParams a int
      if(this.modoEdicion!=null && this.modoEdicion===1){
       let persona : Persona = this.personasService.encontrarPersona(this.index)
       this.nombreInput = persona.nombre
       this.apellidoInput = persona.apellido
      }
  }

  // @ViewChild("nombreInput") nombreInput: ElementRef
  // @ViewChild("apellidoInput") apellidpInput: ElementRef

  guardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion!=null && this.modoEdicion===1){
      this.personasService.modificarPersona(this.index, persona1)

    }else{
      this.personasService.agregarPersona(persona1);
    }
    
    this.router.navigate(['personas']);
  }
  eliminarPersona(){
    if(this.index){
      this.personasService.eliminarPersona(this.index)
    }
    this.router.navigate(['personas']);
  }

}
