import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-empleados-de-un-area',
  templateUrl: './empleados-de-un-area.component.html',
  styleUrls: ['./empleados-de-un-area.component.scss']
})
export class EmpleadosDeUnAreaComponent implements OnInit {

  lista = 0;
  area = "Servicio Tecnico";
  constructor(public empleadoSvc:EmpleadoService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.empleadoSvc.empleadosDeUnArea(this.area,(value)=>{
      this.lista = value;
      //console.log(value);
    });
  }

}
