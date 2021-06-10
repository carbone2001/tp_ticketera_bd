import { Injectable } from '@angular/core';
import { BaseDeDatosService } from './base-de-datos.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private backend:BaseDeDatosService
  ) { }


  public cantidadTicketsMayorA(cantidad:number,callback = (value) =>{}){
    return this.backend.generatePostRequest("cliente/cantidadTicketsMayorA",callback,{cantidad:cantidad});
  }

  public clientesConPlanes(planes:string[],callback = (value) =>{}){
    return this.backend.generatePostRequest("cliente/clientesConPlanes",callback,{plan:planes});
  }

  public clientesPorCadaCanal(callback = (value) =>{}){
    return this.backend.generatePostRequest("cliente/clientesPorCadaCanal",callback);
  }

  public canalesPorCadaCliente(callback = (value) =>{}){
    return this.backend.generatePostRequest("cliente/canalesPorCadaCliente",callback);
  }

  public clientesDeUnaLocalidadConPlan(localidad,plan,callback = (value) =>{}){
    return this.backend.generatePostRequest("cliente/clientesDeUnaLocalidadConPlan",callback,{localidad:localidad,plan:plan});
  }

  public clientesDeUnaLocalidadConCanal(localidad,canal,callback = (value) =>{}){
    return this.backend.generatePostRequest("cliente/clientesDeUnaLocalidadConCanal",callback,{localidad:localidad,canal:canal});
  }

  public dentroAreaServicioDeLocalidad(localidad,area,callback = (value) =>{}){
    return this.backend.generatePostRequest("cliente/dentroAreaServicioDeLocalidad",callback,{localidad:localidad,area:area});
  }
}
