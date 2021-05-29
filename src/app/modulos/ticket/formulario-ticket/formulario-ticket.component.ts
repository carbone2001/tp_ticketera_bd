import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'formulario-ticket',
  templateUrl: './formulario-ticket.component.html',
  styleUrls: ['./formulario-ticket.component.scss']
})
export class FormularioTicketComponent implements OnInit {

  @Input() titulo = "Formulario Ticket";
  @Input() razon = true;
  @Input() derivar = true;
  @Input() estado = true;
  @Input() planes = false;//Solo se mostraran en caso de dar de alta o baja]
  listaDePlanes;//La idea es que esto sea una lista. De todos los planes o los que tiene el cliente
  
  constructor() { }


  ngOnInit(): void {
  }

  razonChange(event){
    if(event.target.value == "dar-alta-plan" || event.target.value == "dar-baja-plan"){
      this.listaDePlanes = true;
    }
    else{
      this.listaDePlanes = false;
    }
  }

}
