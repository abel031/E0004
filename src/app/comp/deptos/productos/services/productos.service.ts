import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, Subscription, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProductos, ProductoNuevo, ProductosToAJSON} from 'src/app/pojos/iproductos';
import { DaoProductosService } from '../../DAO/dao-productos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private myCon:Subscription;
    private productos:IProductos[]; 
    private producto:IProductos; 
    private producto$=new Subject<IProductos>();
    private productos$ =new Subject<IProductos[]>();  // Objeto a observar cuando esta lleno.

    errorMessage = '';
    temp:any;

    constructor(private DaoProductos: DaoProductosService ) {}

    ngOnInit(): void {}
      
    getProductos(): Observable<IProductos[]> {  
      
      this.myCon=this.DaoProductos.get().subscribe({
        next: producto => {          
          this.productos = ProductosToAJSON(producto);          
          this.productos$.next(this.productos); // Emite evento que esta lleno !!  
          return this.productos$.asObservable();
        },
        error: err => this.errorMessage = err
      });
      return this.productos$.asObservable();
    }
 
    getProducto(id: number):Observable<IProductos> {

       this.myCon=this.DaoProductos.getId(id).subscribe({
        next: producto => {
          this.producto$.next(producto); // Emite evento que esta lleno !!  
          return this.producto$.asObservable();
        },
        error: err => this.errorMessage = err
      });
      return this.producto$.asObservable();
        
    }

    UpdateProducto(p:IProductos){
          
        this.DaoProductos.put(p).subscribe((Ok) => {      // Modifica la BD 
          //console.log(Ok); // 1 indica ok          
          let itemIndex = this.productos.findIndex(item => item.productId == p.productId);          
          this.productos[itemIndex] = p;
          this.productos$.next(this.productos); // Notifica que el array ha cambiado !! 
        }, (error) => {
          console.log("error edit:"+error);
        }) 
    }

    EliminaProducto(id:number){
        
      this.DaoProductos.Eliminar(id).subscribe((Ok) => {   // Elimina de la BB
        console.log(Ok); // 1 indica ok          
        let itemIndex = this.productos.findIndex(item => item.productId == id);          
        this.productos.splice(itemIndex,1); // Elimina un elemento desde itemIndex        
        this.productos$.next(this.productos); // Notifica que el array ha cambiado !!
      }, (error) => {
        console.log("error edit:"+error);
      }) 
  }

    NuevoProducto(p:IProductos){
      console.log(p);  
      this.DaoProductos.Nuevo(p).subscribe((NroReg) => { // Nuevo en la BD
        console.log("que es ok:"+NroReg);       
        let q=ProductoNuevo(NroReg,p.productName,p.productCode,p.releaseDate,p.price,p.description,
                           p.starRating,p.imageUrl);
        let itemIndex = this.productos.findIndex(item => item.productId == NroReg);
        if (itemIndex<0) this.productos.push(q);  
        this.productos$.next(this.productos); // Notifica que el array ha cambiado !!
        // this.router.navigate(['./Home/Deptos/Depto/3/Productos']);
      }, (error) => {
        console.log("error edit:"+error);
      }) 
    }

}
