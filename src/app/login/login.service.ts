import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class loginService {
  token: string 

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    firebase
      .signInWithEmailAndPassword(firebase.getAuth(), email, password)
      .then((result: any) => {
        firebase
          .getAuth()
          .currentUser?.getIdToken()
          .then((token: any) => {
            this.token = token;
            this.router.navigate(['']);
          }
          );
      });
  }

  registro(email: string, password: string){
    
    firebase.createUserWithEmailAndPassword(firebase.getAuth(),email,password).then(
    (result:any)=>{
    console.log("Usuario creado correctamente "+result)
    this.router.navigate(['login']);
    }
    ).catch( error => console.error("Error al crear el usuario "+error))

  }

  
 

  getIdToken()
  {return this.token}

  isAutentificado(){
    return this.token != null
  }

  logout(){
    let strinaux: string
  firebase.getAuth().signOut().then(
    ()=>{
      
      this.token= strinaux
      this.router.navigate(['login'])
    }
  ).catch(error => console.log("Error logout :"+error))
  }


}
