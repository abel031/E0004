import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule,  CompDeProductos } from './productos-routing.module';

import { StarModule } from 'src/app/shared/star.module';
import {ProductosService} from './services/productos.service';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const FormsComponents=[FormsModule,MatCardModule,MatFormFieldModule,MatSelectModule,
  MatSliderModule,MatInputModule,MatTableModule,MatPaginatorModule, MatSnackBarModule];



@NgModule({
  declarations:[ CompDeProductos],
  imports: [
    CommonModule,
    ProductosRoutingModule,    
    StarModule,
    HttpClientModule,
    FormsComponents 
   
  ],
  exports: [],
  providers:[ProductosService]
})
export class ProductosModule { }
