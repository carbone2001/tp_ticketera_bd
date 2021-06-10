import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentesContenedorComponent } from './incidentes-contenedor/incidentes-contenedor.component';
import { DesperfectosPorLocalidadesComponent } from './desperfectos-por-localidades/desperfectos-por-localidades.component';



@NgModule({
  declarations: [IncidentesContenedorComponent, DesperfectosPorLocalidadesComponent],
  imports: [
    CommonModule
  ],
  exports:[
    IncidentesContenedorComponent
  ]
})
export class IncidentesModule { }
