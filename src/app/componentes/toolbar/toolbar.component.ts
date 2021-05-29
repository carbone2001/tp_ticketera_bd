import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToolbarService } from '../../servicios/toolbar.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  selected = "incidentes";
  constructor(
    public toolbarSvc: ToolbarService,
    private location:Location,
    private router:Router
  ) { }


  ngOnInit(): void {
  }

  optionSelected(option){
    this.selected = option;
    
  }

  back(){
    this.router.navigateByUrl("/login");
    this.selected = 'incidentes';
  }

}
