import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ideptos } from 'src/app/pojos/ideptos';
import { DeptosService } from './deptos.service';

@Component({
  selector: 'app-deptos',
  templateUrl: './deptos.component.html',
  styles: [
  ]
})
export class DeptosComponent implements OnInit {

  public departamentos:Ideptos[];
  public idDepto="1";

  constructor(private router:Router, private datosDepto:DeptosService) { }

  ngOnInit(): void {
    this.departamentos=this.datosDepto.getDeptos();
  }

  irAVentas(){
    this.router.navigate(['/Empleados',"25", "Ventas"]);
  }

}
