import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/servicios/toolbar.service';

@Component({
  selector: 'clientes-contenedor',
  templateUrl: './clientes-contenedor.component.html',
  styleUrls: ['./clientes-contenedor.component.scss']
})
export class ClientesContenedorComponent implements OnInit {

  constructor(
    private toolbarSvc:ToolbarService
  ) { }

  ngOnInit(): void {
    this.toolbarSvc.btnIncidentes = false;
    this.toolbarSvc.btnDatosZonales = false;
    this.toolbarSvc.btnClientes = false;
    this.toolbarSvc.btnAtencion = false;
  }

}
