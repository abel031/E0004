import { Injectable } from '@angular/core';
import { Ideptos } from 'src/app/pojos/ideptos';

@Injectable({
  providedIn: 'root'
})
export class DeptosService {
  
  public depts =[
    {id:"1",name:"Contabilidad",jefe:"Luis Ponce",horario:"L 10:30h", contacto:" Avisar al tel:666666666"},
    {id:"2",name:"Nominas",jefe:"Raul Gomez",horario:"L 10:30h", contacto:" Avisar al tel:666666666"},
    {id:"3",name:"Almacen",jefe:"Pepe Romero",horario:"L 8h-20:30h", contacto:" Avisar al tel:666666666"}
  ]

  constructor() { }

  getDeptos(id?:number):Ideptos[]{
    if(id){
      return this.depts.filter(
        (value,index,arr)=>{
          if (parseInt(value.id)==id) return value;
        }
      )
    }else{
      return this.depts;
    }
  }
}
