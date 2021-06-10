import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/servicios/ticket.service';

@Component({
  selector: 'app-desperfectos-por-localidades',
  templateUrl: './desperfectos-por-localidades.component.html',
  styleUrls: ['./desperfectos-por-localidades.component.scss']
})
export class DesperfectosPorLocalidadesComponent implements OnInit {

  lista = null;
  constructor(public ticketSvc:TicketService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.ticketSvc.desperfectosPorLocalidades((value)=>{
      this.lista = value;
      //console.log(value);
    })
  }

}
