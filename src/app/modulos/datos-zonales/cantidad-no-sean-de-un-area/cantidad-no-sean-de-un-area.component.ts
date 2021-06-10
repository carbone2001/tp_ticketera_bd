import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-cantidad-no-sean-de-un-area',
  templateUrl: './cantidad-no-sean-de-un-area.component.html',
  styleUrls: ['./cantidad-no-sean-de-un-area.component.scss']
})
export class CantidadNoSeanDeUnAreaComponent implements OnInit {

  cantidad = 0;
  area = "Servicio Tecnico";
  constructor(public empleadoSvc:EmpleadoService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.empleadoSvc.cantidadNoSeanDeUnArea(this.area,(value)=>{
      this.cantidad = value[0].dni;
      //console.log(value);
    });
  }
}
