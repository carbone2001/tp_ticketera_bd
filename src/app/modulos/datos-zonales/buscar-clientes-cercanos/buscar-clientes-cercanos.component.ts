import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../../servicios/sucursal.service';
@Component({
  selector: 'app-buscar-clientes-cercanos',
  templateUrl: './buscar-clientes-cercanos.component.html',
  styleUrls: ['./buscar-clientes-cercanos.component.scss']
})
export class BuscarClientesCercanosComponent implements OnInit {
  lista = null;
  localidad = "Avellaneda";
  distancia = 1000;
  constructor(public sucursalSvc:SucursalService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.sucursalSvc.buscarClientesCercanos(this.localidad,this.distancia,(value)=>{
      this.lista = value;
      //console.log(value);
    })
  }

}
