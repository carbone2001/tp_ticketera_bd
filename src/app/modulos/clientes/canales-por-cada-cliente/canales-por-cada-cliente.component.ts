import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-canales-por-cada-cliente',
  templateUrl: './canales-por-cada-cliente.component.html',
  styleUrls: ['./canales-por-cada-cliente.component.scss']
})
export class CanalesPorCadaClienteComponent implements OnInit {
  lista = null;
  constructor(
    public clienteSvc:ClienteService
  ) { }

  ngOnInit(): void {
  }

  canalesPorCadaCliente(){
    this.clienteSvc.canalesPorCadaCliente((value)=>{
      this.lista = value;
      //console.log(value);
    })
  }

}
