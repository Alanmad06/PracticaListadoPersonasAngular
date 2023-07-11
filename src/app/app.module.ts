import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormComponent } from './personas/form/form.component';
import { loggingService } from './loggingService.service';
import { personasService } from './personas.service';
import { AppRoutingModule } from './app-routing.module';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { dataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from '../environments/environment';
import { loginService } from './login/login.service';
import { loginGuardian } from './login/loginguardian.service';
import { RegistroComponent } from './registro/registro.component';
import { AmigosComponent } from './personas/persona/amigos/amigos.component';
import { FormAmigosComponent } from './personas/form/form-amigos/form-amigos.component';





@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent,
    RegistroComponent,
    AmigosComponent,
    FormAmigosComponent
   
    
    
  ],
  imports: [
    BrowserModule, FormsModule , AppRoutingModule , HttpClientModule, AngularFireModule.initializeApp(environment.firestore),
     AngularFireAuthModule,AngularFirestoreModule,
     AngularFireStorageModule,
     AngularFireDatabaseModule,
  ],
  providers: [
    loggingService , personasService , dataServices ,loginService , loginGuardian
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
