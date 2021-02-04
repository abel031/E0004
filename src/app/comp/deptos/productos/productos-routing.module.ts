import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';


const routes: Routes = [
    { path: '', component: ListaProductosComponent, outlet:"ModuloProductos"},  
    { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }

export const CompDeProductos = [ListaProductosComponent];

