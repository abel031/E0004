import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './comp/home/home.component';
import { AboutComponent } from './comp/about/about.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { DeptosComponent } from './comp/deptos/deptos.component';
import { EmpleadosComponent } from './comp/deptos/empleados/empleados.component';
import { DeptoComponent } from './comp/deptos/depto/depto.component';
import { TareasComponent } from './comp/deptos/tareas/tareas.component';

/*const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"About",component:AboutComponent},
  {path:"Deptos",component:DeptosComponent},
  {path:"Depto/:id",component:DeptoComponent},
  {path:"Empleados/:id/:nomDepto",component:EmpleadosComponent},
  {path:"",},
  {path:"**",component:PageNotFoundComponent}
  ];*/

const routes: Routes = [
{path:'',redirectTo:"Home",pathMatch:"full"},
{path:"Home",component:HomeComponent},
{path:"Home/About",component:AboutComponent},
{path:"Home/Deptos",component:DeptosComponent},
{path:"Home/Deptos/Depto/:id",component:DeptoComponent,
  children:[
    {path:"Empleados/:id/:nomDepto",component:EmpleadosComponent},
    {path:"Tareas/:id",component:TareasComponent}
  ]
},
{path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ComponentesCreados=[HomeComponent, AboutComponent, DeptosComponent, EmpleadosComponent, PageNotFoundComponent, DeptoComponent, TareasComponent];
