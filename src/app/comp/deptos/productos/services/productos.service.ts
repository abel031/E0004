import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProductos} from 'src/app/pojos/iproductos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productUrl = 'assets/products/products.json';

  constructor(private http: HttpClient) { }
  getProductos(): Observable<IProductos[]> {
    return this.http.get<IProductos[]>(this.productUrl);  // Ademas de devolver el json lo muestra en consola!!
    /*.pipe(
          tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError)      
        );
     */   
    }
  
    getProducto(id: number): Observable<IProductos | undefined> {
      return this.getProductos()
        .pipe(
          map((products: IProductos[]) => products.find(p => p.productId === id))
        );
    }

    private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `Ha passat un error: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Codigo devuelto por el Server: ${err.status}, Mensaje: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }

}
