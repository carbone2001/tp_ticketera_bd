import { Injectable } from '@angular/core';
import { BaseDeDatosService } from './base-de-datos.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private backend:BaseDeDatosService) { }

  public desperfectosPorLocalidades(callback = (value) =>{}){
    return this.backend.generatePostRequest("ticket/desperfectosPorLocalidades",callback);
  }

  public clientesQueSonEmpleadosConTickets(callback = (value) =>{}){
    return this.backend.generatePostRequest("ticket/clientesQueSonEmpleadosConTickets",callback);
  }
}
