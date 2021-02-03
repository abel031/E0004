import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProductos, ProductosToAJSON} from 'src/app/pojos/iproductos';
import { DaoProductosService } from '../../DAO/dao-productos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productUrl = 'assets/products/products.json';
  productos: IProductos[];
  productos$ = new Subject<IProductos[]>();
  errrorMessage='';

  constructor(private DaoProductos:DaoProductosService) { }
  
  getProductos():Observable<IProductos[]>{
    this.DaoProductos.get().subscribe({
        next: 	producto	=>	{
            this.productos=ProductosToAJSON(producto);
            this.productos$.next(this.productos);
            return this.productos$.asObservable();
            },
        error: err => this.errrorMessage=err
  });
  return this.productos$.asObservable();
  }

  EliminarProducto(id){
    this.DaoProductos.Eliminar(id).subscribe(
      (ok) =>{
        let index = this.productos.findIndex(item => item.productId = id);
        this.productos.splice(index,1);
        this.productos$.next(this.productos);
      }
    )
  }

}
