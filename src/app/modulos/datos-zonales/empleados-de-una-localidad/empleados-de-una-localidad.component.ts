import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-empleados-de-una-localidad',
  templateUrl: './empleados-de-una-localidad.component.html',
  styleUrls: ['./empleados-de-una-localidad.component.scss']
})
export class EmpleadosDeUnaLocalidadComponent implements OnInit {

  lista = null;
  localidad = "Avellaneda";
  constructor(public empleadoSvc:EmpleadoService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.empleadoSvc.empleadosDeUnaLocalidad(this.localidad,(value)=>{
      this.lista = value;
      //console.log(value);
    })
  }

}
