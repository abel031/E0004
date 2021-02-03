import { Component, OnInit } from '@angular/core';
import { IProductos} from '../../../../pojos/iproductos';
import { ProductosService } from '../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  Title = 'Lista de productos';
  imageWidth = 50; imageMargin = 2; showImage = false;  //Mostrar imagen
  errorMessage = '';
  _listFilter = '';  // Nombre de producto a filtrar
  ProductosFiltrados: IProductos[] = []; //Lo que se muestra en la vista!!
  productos: IProductos[] = [];  //Todos los productos!!
  editing:boolean = false;
  producto:IProductos;

  constructor(private RutaActiva: ActivatedRoute,
              private router: Router,
              private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe({
			next:  	productos =>{
						this.productos=productos;
						this.ProductosFiltrados = this.productos;	
					},
			error:	err => this.errorMessage=err
	});
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.ProductosFiltrados = this.listFilter ? 
              this.performFilter(this.listFilter) : this.productos;
  }  
  performFilter(filterBy: string): IProductos[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productos.filter((producto: IProductos) =>
      producto.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
 
  onRatingClicked(message: string): void {
    this.Title = 'Lista de Productos: ' + message;
    // this.producto.starRating ++   Pero no podemos hacerlo por ahora !!
  }

  onEdit(id){   
      this.router.navigate(['./Edita',id], {relativeTo:this.RutaActiva});  // Outlet generico hijo!!!
  }

  Eliminar(id){
    this.productosService.EliminarProducto(id);
  }
}
