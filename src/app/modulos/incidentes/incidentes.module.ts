import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentesContenedorComponent } from './incidentes-contenedor/incidentes-contenedor.component';



@NgModule({
  declarations: [IncidentesContenedorComponent],
  imports: [
    CommonModule
  ],
  exports:[
    IncidentesContenedorComponent
  ]
})
export class IncidentesModule { }
