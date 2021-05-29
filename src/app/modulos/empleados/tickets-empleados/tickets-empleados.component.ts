import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/servicios/toolbar.service';

@Component({
  selector: 'app-tickets-empleados',
  templateUrl: './tickets-empleados.component.html',
  styleUrls: ['./tickets-empleados.component.scss']
})
export class TicketsEmpleadosComponent implements OnInit {

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
