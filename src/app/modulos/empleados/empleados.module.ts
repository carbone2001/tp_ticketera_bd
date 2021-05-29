import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsEmpleadosComponent } from './tickets-empleados/tickets-empleados.component';
import { TicketModule } from '../ticket/ticket.module';



@NgModule({
  declarations: [TicketsEmpleadosComponent],
  imports: [
    CommonModule,
    TicketModule
  ],
  exports:[
    TicketsEmpleadosComponent,
  ]
})
export class EmpleadosModule { }
