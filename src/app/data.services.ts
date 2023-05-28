import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { loginService } from './login/login.service';

@Injectable()
export class dataServices {
  constructor(private httpClient: HttpClient ,private loginService:loginService) {}

  cargarPersonas() {
    const token = this.loginService.getIdToken()
    return this.httpClient.get<Persona[]>(
      'https://listado-personas-673cf-default-rtdb.firebaseio.com/datos.json?auth='+token
    );
  }

  guardarPersonas(personas: Persona[]) {
    //this.httpClient.post('https://listado-personas-673cf-default-rtdb.firebaseio.com/datos.json',personas)
    //Con este metodo se agregan nuevos datos a la bd , haciendo que se vuelva a guardar la informacion
    //con el metodo put edita la info que ya este ,
    //Para recuperar la informacion nos suscribimos al evento
    const token = this.loginService.getIdToken()
    this.httpClient
      .put(
        'https://listado-personas-673cf-default-rtdb.firebaseio.com/datos.json?auth='+token,
        personas
      )
      .subscribe({
        next: (response) =>
          console.log('Persona guardada correctamente :' + response),
        error: (error) => console.log('Error al guardar una persona :' + error),
      });
  }

  modificarPersona(index: number, personas: Persona) {
    const token = this.loginService.getIdToken()
    let url: string
     url= 'https://listado-personas-673cf-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth='+token;
    this.httpClient.put(url, personas).subscribe({
      next: (response) =>
        console.log('Persona editada correctamente : ' + response),
      error: (error) => console.log('Error al editar una persona: ' + error),
    });
  }

  eliminarPersona(index: number) {
    const token = this.loginService.getIdToken()
    let url: string
      url ='https://listado-personas-673cf-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth='+token;
    this.httpClient.delete(url).subscribe({
      next: (response) =>
        console.log('Persona eliminada correctamente : ' + response),
      error: (error) => console.log('Error al eliminar una persona: ' + error),
    });
  }

  
}
