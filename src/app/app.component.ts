import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'
import { loginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo ="Listado de Personas"
  constructor(private loginService:loginService){

  }

  ngOnInit(): void {
      /* firebase.initializeApp({
        apiKey: "AIzaSyBdwzi0x1nAFcAWBnUaraTH0jzTq5S61xg",
  authDomain: "listado-personas-673cf.firebaseapp.com"

      }) */
  }

  isAutenticado(){
 return this.loginService.isAutentificado()
  }
  
  logout(){
    this.loginService.logout()

  }

}
