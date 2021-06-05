import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseDeDatosService {

  private urlBase = "https://tp-ticketera.herokuapp.com/";
  //private urlBase = "http://localhost:8080/";
  constructor(
    private http:HttpClient
  ) { }

  public async generatePostRequest(url,callback,body = {}){
    let observer = this.http.post(this.urlBase+url,body).subscribe((value)=>{
      callback(value);
      observer.unsubscribe();
    });
  }

  public async generateGetRequest(url,callback,body = {}){
    let observer = this.http.get(this.urlBase+url,body).subscribe((value)=>{
      callback(value);
      observer.unsubscribe();
    });
  }


}
