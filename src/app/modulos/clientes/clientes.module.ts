import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesContenedorComponent } from './clientes-contenedor/clientes-contenedor.component';
import { InfoClientesComponent } from './info-clientes/info-clientes.component';
import { TicketModule } from '../ticket/ticket.module';



@NgModule({
  declarations: [ClientesContenedorComponent, InfoClientesComponent],
  imports: [
    CommonModule,
    TicketModule
  ]
})
export class ClientesModule { }
