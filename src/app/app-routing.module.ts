import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtencionContenedorComponent } from './modulos/atencion/atencion-contenedor/atencion-contenedor.component';
import { InfoClientesComponent } from './modulos/clientes/info-clientes/info-clientes.component';
import { DatosZonalesContenedorComponent } from './modulos/datos-zonales/datos-zonales-contenedor/datos-zonales-contenedor.component';
import { IncidentesContenedorComponent } from './modulos/incidentes/incidentes-contenedor/incidentes-contenedor.component';

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
    path:"",
    redirectTo:"incidentes",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
