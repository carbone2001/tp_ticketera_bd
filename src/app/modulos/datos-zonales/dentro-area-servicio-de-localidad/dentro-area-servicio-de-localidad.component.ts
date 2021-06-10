import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-dentro-area-servicio-de-localidad',
  templateUrl: './dentro-area-servicio-de-localidad.component.html',
  styleUrls: ['./dentro-area-servicio-de-localidad.component.scss']
})
export class DentroAreaServicioDeLocalidadComponent implements OnInit {

  lista = null;
  localidad = "Avellaneda";
  area = "Servicio Tecnico";
  constructor(public clienteSvc:ClienteService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.clienteSvc.dentroAreaServicioDeLocalidad(this.localidad,this.area,(value)=>{
      this.lista = value ?? [];
      //console.log(value);
    });
  }
}
