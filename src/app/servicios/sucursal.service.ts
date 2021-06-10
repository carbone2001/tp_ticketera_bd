import { Injectable } from '@angular/core';
import { BaseDeDatosService } from './base-de-datos.service';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private backend:BaseDeDatosService) { }

  public buscarTicketCercanos(sucursal:string,distancia:number,callback = (value) =>{}){
    return this.backend.generatePostRequest("sucursal/buscarTicketCercanos",callback,{sucursal:sucursal,distancia:distancia});
  }

  public buscarClientesCercanos(sucursal:string,distancia:number,callback = (value) =>{}){
    return this.backend.generatePostRequest("sucursal/buscarClientesCercanos",callback,{sucursal:sucursal,distancia:distancia});
  }
}
