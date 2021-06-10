import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-cantidad-no-sean-de-una-localidad',
  templateUrl: './cantidad-no-sean-de-una-localidad.component.html',
  styleUrls: ['./cantidad-no-sean-de-una-localidad.component.scss']
})
export class CantidadNoSeanDeUnaLocalidadComponent implements OnInit {

  cantidad = 0;
  localidad = "Avellaneda";
  constructor(public empleadoSvc:EmpleadoService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.empleadoSvc.cantidadNoSeanDeUnaLocalidad(this.localidad,(value)=>{
      this.cantidad = value[0].dni;
      //console.log(value);
    });
  }

}
