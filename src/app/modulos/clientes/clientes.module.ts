import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoClientesComponent } from './info-clientes/info-clientes.component';
import { TicketModule } from '../ticket/ticket.module';
import { CantidadTicketsMayorAComponent } from './cantidad-tickets-mayor-a/cantidad-tickets-mayor-a.component';
import { ClientesConPlanesComponent } from './clientes-con-planes/clientes-con-planes.component';
import { ClientesPorCadaCanalComponent } from './clientes-por-cada-canal/clientes-por-cada-canal.component';
import { CanalesPorCadaClienteComponent } from './canales-por-cada-cliente/canales-por-cada-cliente.component';



@NgModule({
  declarations: [InfoClientesComponent, CantidadTicketsMayorAComponent, ClientesConPlanesComponent, ClientesPorCadaCanalComponent, CanalesPorCadaClienteComponent],
  imports: [
    CommonModule,
    TicketModule
  ]
})
export class ClientesModule { }
