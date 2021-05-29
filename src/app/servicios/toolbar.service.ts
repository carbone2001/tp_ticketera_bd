import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  mostrar = true;
  btnVolver = true;
  btnIncidentes = true;
  btnAtencion = true;
  btnDatosZonales = true;
  btnClientes = true;
  // btnAgregarTicket = true;
  titulo = "TP TICKETERA";
  constructor() { }

  public restaurar(){
    this.mostrar = true;
    this.btnVolver = true;
    this.btnIncidentes = true;
    this.btnAtencion = true;
    this.btnDatosZonales = true;
    this.btnClientes = true;
  }
}
