import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IncidentesModule } from './modulos/incidentes/incidentes.module';
import { AtencionModule } from './modulos/atencion/atencion.module';
import { DatosZonalesModule } from './modulos/datos-zonales/datos-zonales.module';
import { ClientesModule } from './modulos/clientes/clientes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
//import { LoginComponent } from './componentes/login/login.component';
import { TicketModule } from './modulos/ticket/ticket.module';
import { EmpleadosModule } from './modulos/empleados/empleados.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IncidentesModule,
    AtencionModule,
    DatosZonalesModule,
    ClientesModule,
    TicketModule,
    EmpleadosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
