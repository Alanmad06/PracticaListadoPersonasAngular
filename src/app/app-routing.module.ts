import { NgModule } from '@angular/core';

import { Routes ,RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormComponent } from './personas/form/form.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { loginGuardian } from './login/loginguardian.service';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes =[{path: '',component : PersonasComponent, canActivate :[loginGuardian]},{
  path: 'personas', component: PersonasComponent,canActivate :[loginGuardian],  children: [
    {path:'agregar', component: FormComponent},
    {path:':id', component:FormComponent}
  ]},{
    path:'registro', component: RegistroComponent
  },{path:'login', component : LoginComponent },{path: '**',component : ErrorComponent}
]

@NgModule({
 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
