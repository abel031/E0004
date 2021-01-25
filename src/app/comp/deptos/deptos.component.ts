import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ideptos } from 'src/app/pojos/ideptos';
import { DeptosService } from './deptos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-deptos',
  templateUrl: './deptos.component.html',
  styles: [
  ]
})
export class DeptosComponent implements OnInit {

  public departamentos:Ideptos[];
  public idDepto="1";

  constructor(private router:Router, private datosDepto:DeptosService, private location:Location) { }

  ngOnInit(): void {
    this.departamentos=this.datosDepto.getDeptos();
  }

  Volver(){
    //this.router.navigate(['../']);
    this.location.back();
  }

}
