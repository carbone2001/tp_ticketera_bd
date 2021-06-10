import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-cantidad-tickets-mayor-a',
  templateUrl: './cantidad-tickets-mayor-a.component.html',
  styleUrls: ['./cantidad-tickets-mayor-a.component.scss']
})
export class CantidadTicketsMayorAComponent implements OnInit {

  cantidad = 5;
  lista = null;
  constructor(
    public empleadoSvc:EmpleadoService
  ) { }

  ngOnInit(): void {
  }

  buscar(){
    this.empleadoSvc.cantidadTicketsMayorA(this.cantidad,(value)=>{
      this.lista = value;
      //console.log(value);
    });
  }

}
