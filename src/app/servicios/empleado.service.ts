import { Injectable } from '@angular/core';
import { BaseDeDatosService } from './base-de-datos.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(
    private backend:BaseDeDatosService
  ) { }

  public cantidadNoSeanDeUnaLocalidad(localidad:string,callback = (value) =>{}){
    return this.backend.generatePostRequest("empleado/cantidadNoSeanDeUnaLocalidad",callback,{localidad:localidad});
  }

  public cantidadNoSeanDeUnArea(area:string,callback = (value) =>{}){
    return this.backend.generatePostRequest("empleado/cantidadNoSeanDeUnArea",callback,{area:area});
  }

  public empleadosDeUnArea(area:string,callback = (value) =>{}){
    return this.backend.generatePostRequest("empleado/empleadosDeUnArea",callback,{area:area});
  }

  public empleadosDeUnaLocalidad(localidad:string,callback = (value) =>{}){
    return this.backend.generatePostRequest("empleado/empleadosDeUnaLocalidad",callback,{localidad:localidad});
  }

  public cantidadTicketsMayorA(cantidad:number,callback = (value) =>{}){
    return this.backend.generatePostRequest("empleado/cantidadTicketsMayorA",callback,{cantidad:cantidad});
  }

}
