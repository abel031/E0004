import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './comp/home/home.component';
import { AboutComponent } from './comp/about/about.component';
import { PageNotFoundComponent } from './comp/page-not-found/page-not-found.component';
import { DeptosComponent } from './comp/deptos/deptos.component';
import { EmpleadosComponent } from './comp/deptos/empleados/empleados.component';
import { DeptoComponent } from './comp/deptos/depto/depto.component';
import { TareasComponent } from './comp/deptos/tareas/tareas.component';
import { LoginComponent } from './comp/login/login.component';
import { AutenticadoGuard } from './comp/login/autenticado.guard';
import { ProductosModule } from './comp/deptos/productos/productos.module';

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
//{path:'',redirectTo:"Home",pathMatch:"full"},
{path:'',redirectTo:"Login",pathMatch:"full", canActivate:[AutenticadoGuard]},
{path:"Login",component:LoginComponent},
{path:"Home",component:HomeComponent, canActivate:[AutenticadoGuard]},
{path:"Home/About",component:AboutComponent, canActivate:[AutenticadoGuard]},
{path:"Home/Deptos",component:DeptosComponent, canActivate:[AutenticadoGuard]},
{path:"Home/Deptos/Depto/:id",component:DeptoComponent,
  children:[
    {path:"Empleados/:id/:nomDepto",component:EmpleadosComponent},
    {path:"Tareas/:id",component:TareasComponent},
    {path:"Productos",
      loadChildren:()=>import("./comp/deptos/productos/productos.module").then(m=>m.ProductosModule)
    }
  ], canActivate:[AutenticadoGuard]
},
{path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ComponentesCreados=[HomeComponent, AboutComponent, DeptosComponent, EmpleadosComponent, PageNotFoundComponent, DeptoComponent, TareasComponent,LoginComponent];
