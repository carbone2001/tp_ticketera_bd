import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes-de-una-localidad-con-canal',
  templateUrl: './clientes-de-una-localidad-con-canal.component.html',
  styleUrls: ['./clientes-de-una-localidad-con-canal.component.scss']
})
export class ClientesDeUnaLocalidadConCanalComponent implements OnInit {
  lista = null;
  localidad = "Avellaneda";
  canal = "Noticias1";
  constructor(public clienteSvc:ClienteService) { }

  ngOnInit(): void {
  }

  clientesDeUnaLocalidadConCanal(){
    this.clienteSvc.clientesDeUnaLocalidadConCanal(this.localidad,this.canal,(value)=>{
      this.lista = value;
      //console.log(value);
    })
  }

}
