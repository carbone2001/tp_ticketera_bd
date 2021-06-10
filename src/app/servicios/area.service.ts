import { Injectable } from '@angular/core';
import { BaseDeDatosService } from './base-de-datos.service';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(
    private backend:BaseDeDatosService
  ) { }

  public servicioMasCercanoParaTicket(area:string,dni:number,callback = (value)=>{}){
    return this.backend.generatePostRequest("area/servicioMasCercanoParaTicket",callback,{area:area,dni:dni});
  }
}
