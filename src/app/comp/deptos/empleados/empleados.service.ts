import { Injectable } from '@angular/core';
import { Iempleados } from 'src/app/pojos/iempleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  public Empleados =[
    {"id":  1, "name": "Leanne Graham", "username": "Bret", 		"email": "Sincere@april.biz",	"depto":"1","Rendimiento":1.0},
    {"id":  2, "name": "Ervin Howell",	"username": "Antonette","email": "Shanna@melissa.tv",	"depto":"1","Rendimiento":2.0},
    {"id":  3, "name": "Luis Graham", 	"username": "Luis", 		"email": "Luis@april.biz",	"depto":"2","Rendimiento":3.5},
    {"id":  4, "name": "Pepe Gotera", 	"username": "Pepe", 		"email": "Luis@april.biz",	"depto":"3","Rendimiento":4.0},  
    {"id":  5, "name": "Otilio Gilito",	"username": "Otilio",		"email": "Luis@april.biz",	"depto":"3","Rendimiento":5.0},  
  ]

  constructor() { }

  getEmpleados(id?:number):Iempleados[]{
    if(id){
      return this.Empleados.filter(
        (value,index,arr)=>{
          if (parseInt(value.depto)==id) return value;
        }
      )
    }else{
      return this.Empleados;
    }
  }
}
