import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosZonalesContenedorComponent } from './datos-zonales-contenedor/datos-zonales-contenedor.component';
import { ClientesDeUnaLocalidadConPlanComponent } from './clientes-de-una-localidad-con-plan/clientes-de-una-localidad-con-plan.component';
import { ClientesDeUnaLocalidadConCanalComponent } from './clientes-de-una-localidad-con-canal/clientes-de-una-localidad-con-canal.component';
import { DentroAreaServicioDeLocalidadComponent } from './dentro-area-servicio-de-localidad/dentro-area-servicio-de-localidad.component';
import { ServicioMasCercanoParaTicketComponent } from './servicio-mas-cercano-para-ticket/servicio-mas-cercano-para-ticket.component';
import { CantidadNoSeanDeUnaLocalidadComponent } from './cantidad-no-sean-de-una-localidad/cantidad-no-sean-de-una-localidad.component';
import { CantidadNoSeanDeUnAreaComponent } from './cantidad-no-sean-de-un-area/cantidad-no-sean-de-un-area.component';
import { EmpleadosDeUnAreaComponent } from './empleados-de-un-area/empleados-de-un-area.component';
import { EmpleadosDeUnaLocalidadComponent } from './empleados-de-una-localidad/empleados-de-una-localidad.component';
import { BuscarTicketsCercanosComponent } from './buscar-tickets-cercanos/buscar-tickets-cercanos.component';
import { BuscarClientesCercanosComponent } from './buscar-clientes-cercanos/buscar-clientes-cercanos.component';



@NgModule({
  declarations: [DatosZonalesContenedorComponent, ClientesDeUnaLocalidadConPlanComponent, ClientesDeUnaLocalidadConCanalComponent, DentroAreaServicioDeLocalidadComponent, ServicioMasCercanoParaTicketComponent, CantidadNoSeanDeUnaLocalidadComponent, CantidadNoSeanDeUnAreaComponent, EmpleadosDeUnAreaComponent, EmpleadosDeUnaLocalidadComponent, BuscarTicketsCercanosComponent, BuscarClientesCercanosComponent],
  imports: [
    CommonModule
  ]
})
export class DatosZonalesModule { }
