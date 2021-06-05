import { Component, OnInit } from '@angular/core';
import {BaseDeDatosService} from '../../../servicios/base-de-datos.service';
@Component({
  selector: 'incidentes-contenedor',
  templateUrl: './incidentes-contenedor.component.html',
  styleUrls: ['./incidentes-contenedor.component.scss']
})
export class IncidentesContenedorComponent implements OnInit {

  listaTickets = [];
  constructor(
    private bd:BaseDeDatosService
  ) { }

  ngOnInit(): void {
    this.bd.generateGetRequest("ticket/desperfectosPorLocalidades",(value)=>{
      this.listaTickets = value;
    })
  }

}
