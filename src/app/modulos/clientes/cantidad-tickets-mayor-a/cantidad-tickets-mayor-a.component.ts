import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../servicios/cliente.service';
@Component({
  selector: 'app-cantidad-tickets-mayor-a',
  templateUrl: './cantidad-tickets-mayor-a.component.html',
  styleUrls: ['./cantidad-tickets-mayor-a.component.scss']
})
export class CantidadTicketsMayorAComponent implements OnInit {

  cantidad = 1;
  listaClientes= null;
  constructor(
    public clienteSvc:ClienteService
  ) { }

  ngOnInit(): void {
  }

  cantidadTicketsMayorA(){
    this.clienteSvc.cantidadTicketsMayorA(this.cantidad,(value)=>{
      this.listaClientes = value;
    });
  }

}
