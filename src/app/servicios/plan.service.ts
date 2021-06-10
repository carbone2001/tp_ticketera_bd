import { Injectable } from '@angular/core';
import { BaseDeDatosService } from './base-de-datos.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private backend:BaseDeDatosService) { }

  public lanzamientosAntesDe(fecha:number,callback = (value) =>{}){
    return this.backend.generatePostRequest("plan/lanzamientosAntesDe",callback,{fecha:fecha});
  }
}
