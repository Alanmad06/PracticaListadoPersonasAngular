import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { loginService } from '../login/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  constructor(private loginService: loginService) {}

  registro(form: NgForm) {
    if (form.value.password.length < 6) {
      alert('La contraseña debe ser mayor a 6 caracteres');

      if (form.value.password != form.value.cpassword) {
        alert('Contraseñan no coinciden');
      } else {
        this.loginService.registro(form.value.email, form.value.password);
      }
    }
  }
}
