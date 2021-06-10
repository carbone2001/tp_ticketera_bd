import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes-por-cada-canal',
  templateUrl: './clientes-por-cada-canal.component.html',
  styleUrls: ['./clientes-por-cada-canal.component.scss']
})
export class ClientesPorCadaCanalComponent implements OnInit {
  lista = null;
  constructor(
    public clienteSvc:ClienteService
  ) { }

  ngOnInit(): void {
  }

  clientesPorCadaCanal(){
    this.clienteSvc.clientesPorCadaCanal((value)=>{
      this.lista = value;
      //console.log(value);
    })
  }

}
