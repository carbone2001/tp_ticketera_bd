import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../../servicios/plan.service';
@Component({
  selector: 'app-lanzamientos-antes-de',
  templateUrl: './lanzamientos-antes-de.component.html',
  styleUrls: ['./lanzamientos-antes-de.component.scss']
})
export class LanzamientosAntesDeComponent implements OnInit {
  fecha = 1609339768;
  lista = null;
  constructor(
    public planSvc:PlanService
  ) { }

  ngOnInit(): void {
  }

  public buscar(){
    this.planSvc.lanzamientosAntesDe(this.fecha,(value)=>{
      this.lista = value;
      //console.log(value);
    });
  }

  public parseDate(timestamp:number){
    return (new Date(timestamp*1000)).toISOString();
  }

}
