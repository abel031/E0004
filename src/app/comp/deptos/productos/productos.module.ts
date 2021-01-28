import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule,  CompDeProductos } from './productos-routing.module';
import {ProductosService} from './services/productos.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StarModule } from 'src/app/shared/star.module';
//import { EditProductoComponent } from './edit-producto/edit-producto.component';

@NgModule({
  declarations:[ CompDeProductos],
  imports: [
    CommonModule,
    ProductosRoutingModule,    
    StarModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [],
  providers:[ProductosService]
})
export class ProductosModule { }
