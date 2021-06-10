import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-buscar-tickets-cercanos',
  templateUrl: './buscar-tickets-cercanos.component.html',
  styleUrls: ['./buscar-tickets-cercanos.component.scss']
})
export class BuscarTicketsCercanosComponent implements OnInit {

  lista = null;
  localidad = "Avellaneda";
  distancia = 1000;
  constructor(public sucursalSvc:SucursalService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.sucursalSvc.buscarTicketCercanos(this.localidad,this.distancia,(value)=>{
      this.lista = value;
      //console.log(value);
    })
  }

}
