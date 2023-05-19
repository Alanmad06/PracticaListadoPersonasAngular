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

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormComponent,
    PersonasComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, FormsModule , AppRoutingModule
  ],
  providers: [
    loggingService , personasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
