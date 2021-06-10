import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtencionContenedorComponent } from './atencion-contenedor/atencion-contenedor.component';
import { CantidadTicketsMayorAComponent } from './cantidad-tickets-mayor-a/cantidad-tickets-mayor-a.component';
import { LanzamientosAntesDeComponent } from './lanzamientos-antes-de/lanzamientos-antes-de.component';
import { ClientesQueSonEmpleadosConTicketsComponent } from './clientes-que-son-empleados-con-tickets/clientes-que-son-empleados-con-tickets.component';



@NgModule({
  declarations: [AtencionContenedorComponent, CantidadTicketsMayorAComponent, LanzamientosAntesDeComponent, ClientesQueSonEmpleadosConTicketsComponent],
  imports: [
    CommonModule
  ]
})
export class AtencionModule { }
