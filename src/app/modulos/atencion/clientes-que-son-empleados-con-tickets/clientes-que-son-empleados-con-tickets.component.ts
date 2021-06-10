import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/servicios/ticket.service';

@Component({
  selector: 'app-clientes-que-son-empleados-con-tickets',
  templateUrl: './clientes-que-son-empleados-con-tickets.component.html',
  styleUrls: ['./clientes-que-son-empleados-con-tickets.component.scss']
})
export class ClientesQueSonEmpleadosConTicketsComponent implements OnInit {


  lista = null;
  constructor(
    public ticketSvc:TicketService
  ) { }

  ngOnInit(): void {
  }

  buscar(){
    this.ticketSvc.clientesQueSonEmpleadosConTickets((value)=>{
      this.lista = value;
    });
  }

}
