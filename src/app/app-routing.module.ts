import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AtencionContenedorComponent } from './modulos/atencion/atencion-contenedor/atencion-contenedor.component';
import { ClientesContenedorComponent } from './modulos/clientes/clientes-contenedor/clientes-contenedor.component';
import { InfoClientesComponent } from './modulos/clientes/info-clientes/info-clientes.component';
import { DatosZonalesContenedorComponent } from './modulos/datos-zonales/datos-zonales-contenedor/datos-zonales-contenedor.component';
import { TicketsEmpleadosComponent } from './modulos/empleados/tickets-empleados/tickets-empleados.component';
import { IncidentesContenedorComponent } from './modulos/incidentes/incidentes-contenedor/incidentes-contenedor.component';
import { FormularioTicketComponent } from './modulos/ticket/formulario-ticket/formulario-ticket.component';

const routes: Routes = [
  {
    path:"incidentes",
    component:IncidentesContenedorComponent
  },
  {
    path:"atencion",
    component:AtencionContenedorComponent
  },
  {
    path:"datosZonales",
    component:DatosZonalesContenedorComponent
  },
  {
    path:"clientes/info",
    component:InfoClientesComponent
  },
  {
    path:"clientes/tickets",
    component:ClientesContenedorComponent
  },
  {
    path:"empleados/tickets",
    component:TicketsEmpleadosComponent
  },
  {
    path:"ticket/formulario",
    component:FormularioTicketComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
