import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { relative } from 'path';
import { Ideptos } from 'src/app/pojos/ideptos';
import { DeptosService } from '../deptos.service';

@Component({
  selector: 'app-depto',
  templateUrl: './depto.component.html',
  styleUrls: ['./depto.component.css']
})
export class DeptoComponent implements OnInit {

  Departamento:Ideptos;
  idDepto:string;

  constructor(private route:Router,private datosDepto:DeptosService, private RutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.RutaActiva.paramMap.subscribe(
      (param:ParamMap)=>{
        this.idDepto = param.get("id");
        var Depto:Ideptos[] = this.datosDepto.getDeptos(parseInt(this.idDepto));
        this.Departamento = Depto[0];
        this.verProducto();
      }
    )
    
  }

  verProducto(){
    this.route.navigate(["./Productos"],{relativeTo:this.RutaActiva})
  }

}
