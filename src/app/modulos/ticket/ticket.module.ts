import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioTicketComponent } from './formulario-ticket/formulario-ticket.component';
import { ListadoTicketsComponent } from './listado-tickets/listado-tickets.component';



@NgModule({
  declarations: [FormularioTicketComponent, ListadoTicketsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FormularioTicketComponent,
    ListadoTicketsComponent
  ]
})
export class TicketModule { }
