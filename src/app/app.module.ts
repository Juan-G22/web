import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { RegistromedicoComponent } from './pagina/registromedico/registromedico.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { CrearCitaComponent } from './pagina/crear-cita/crear-cita.component';
import { DetalleCitaComponent } from './pagina/detalle-cita/detalle-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    GestionPqrsComponent,
    RegistromedicoComponent,
    CrearPqrsComponent,
    DetallePqrsComponent,
    GestionCitasComponent,
    CrearCitaComponent,
    DetalleCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
