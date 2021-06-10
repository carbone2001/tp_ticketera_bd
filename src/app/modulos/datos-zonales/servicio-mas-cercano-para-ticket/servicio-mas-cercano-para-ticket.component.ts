import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/servicios/area.service';

@Component({
  selector: 'app-servicio-mas-cercano-para-ticket',
  templateUrl: './servicio-mas-cercano-para-ticket.component.html',
  styleUrls: ['./servicio-mas-cercano-para-ticket.component.scss']
})
export class ServicioMasCercanoParaTicketComponent implements OnInit {

  listaServicioMasCercanoParaTicket;
  servicioMasCercanoTicket = {area:"Servicio Tecnico",dni:19035659}
  constructor(private areaSvc:AreaService) { }

  ngOnInit(): void {
  }

  servicioMasCercanoParaTicket(){
    this.areaSvc.servicioMasCercanoParaTicket(
      this.servicioMasCercanoTicket.area,
      this.servicioMasCercanoTicket.dni,(value)=>{
      this.listaServicioMasCercanoParaTicket = value;
    })
  }
}
