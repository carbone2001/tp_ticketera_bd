import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToolbarService } from 'src/app/servicios/toolbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private toolbarSvc:ToolbarService,
    
  ) { }

  ngOnInit(): void {
    this.toolbarSvc.mostrar = false;
  }

  onClickOption(tipo){
    this.toolbarSvc.mostrar = true;
    this.toolbarSvc.restaurar();
  }

}
