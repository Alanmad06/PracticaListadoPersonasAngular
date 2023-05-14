import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './persona/persona.component';
import { FormComponent } from './form/form.component';
import { loggingService } from './loggingService.service';
import { personasService } from './personas.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    loggingService , personasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
