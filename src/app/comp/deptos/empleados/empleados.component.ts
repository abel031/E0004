import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Iempleados } from 'src/app/pojos/iempleados';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: [
  ]
})
export class EmpleadosComponent implements OnInit {

  constructor(private RutaActiva:ActivatedRoute, private DatosEmpleados:EmpleadosService) { }

  ngOnInit(): void {
    this.RutaActiva.paramMap.subscribe(
      (param:ParamMap)=>{
        this.Departamento={
          id:param.get("id"),
          Nombre:param.get("nomDepto")
        }
        this.Empleados=this.DatosEmpleados.getEmpleados(parseInt(this.Departamento.id));
      }
    )
    
  }

  Empleados:Iempleados[];
  Departamento:{id:string, Nombre:string};

}
