import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes-de-una-localidad-con-plan',
  templateUrl: './clientes-de-una-localidad-con-plan.component.html',
  styleUrls: ['./clientes-de-una-localidad-con-plan.component.scss']
})
export class ClientesDeUnaLocalidadConPlanComponent implements OnInit {

  lista = null;
  localidad = "Avellaneda";
  plan = "Normal";
  constructor(public clienteSvc:ClienteService) { }

  ngOnInit(): void {
  }

  clientesDeUnaLocalidadConPlan(){
    this.clienteSvc.clientesDeUnaLocalidadConPlan(this.localidad,this.plan,(value)=>{
      this.lista = value;
      //console.log(value);
    })
  }

}
