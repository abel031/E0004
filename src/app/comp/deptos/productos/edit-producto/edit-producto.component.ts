import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { IProductos, NewProduct} from '../../../../pojos/iproductos';
import { IProductos, NewProduct} from 'src/app/pojos/iproductos';
import { ProductosService } from '../services/productos.service';

@Component({
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  @ViewChild('DESC',{static: false}) DESC: ElementRef;
  @ViewChild('CODIG',{static: false}) CODIGO: ElementRef;
  @ViewChild('DATA',{static: false})  DATA: ElementRef;

  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProductos = new NewProduct(0,"","","",0,"",0,""); // Molt important el inicialitzar!!
  //name1="que pasa";

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
   
  }
  logMessage(value){console.log(value);}

  setFocus(value){
    
     switch(value) { 
      case 'DESC': { 
         this.DESC.nativeElement.focus();
         console.log(this.DESC);  
         break; 
      } 
      case 'CODIG': { 
         this.CODIGO.nativeElement.focus();
         break; 
      } 
      case 'DATA': { 
        this.DATA.nativeElement.focus();
       // this.DATA.nativeElement.disabled=true;
        break; 
     } 
     }
  }
  
  onSubmit(){
    console.log(this.product); //el producto original !!
    //this.product.productName = 

  }
 

  getProduct(id: number) {
    this.productosService.getProducto(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }
  

}

