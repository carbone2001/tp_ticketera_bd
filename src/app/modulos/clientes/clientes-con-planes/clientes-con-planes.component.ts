import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes-con-planes',
  templateUrl: './clientes-con-planes.component.html',
  styleUrls: ['./clientes-con-planes.component.scss']
})
export class ClientesConPlanesComponent implements OnInit {

  plan = ["Normal"];
  lista = null;
  constructor(
    public clienteSvc:ClienteService
  ) { }

  ngOnInit(): void {
  }

  public AgregarQuitarElemento(elemento:string){
    if(this.plan.indexOf(elemento) != -1){
      this.plan = this.plan.filter((current)=>{
        return !(elemento == current);
      })
    }
    else{
      this.plan.push(elemento);
    }
  }

  public Contiene(elemento){
    return this.plan.indexOf(elemento) != -1 ? true : false;
  }

  public clientesConPlanes(){
    this.clienteSvc.clientesConPlanes(this.plan,(value)=>{
      this.lista = value;
      //console.log(value);
    })
  }



}
