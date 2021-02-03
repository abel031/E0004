import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DaoProductosService {

  constructor(private http: HttpClient) { }
  API="HTTP://localhost/api/api.php"

  get():Observable<any>{
      return this.http.get<[]>(this.API + "/productos").pipe(catchError(this.handleError));
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
