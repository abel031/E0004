import { Component, OnInit } from '@angular/core';
import { IProductos, ProductoNuevo} from '../../../../pojos/iproductos';
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
  product:IProductos;
  nuevo : boolean = false;

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
 
  onRatingClicked($event): void {
    console.log($event)
    // this.producto.starRating ++   Pero no podemos hacerlo por ahora !!
    this.product.starRating ++
  }

  onEdit(id){
      this.editing = true;
      let ItemIndex = this.productos.findIndex(item => item.productId = id);
      this.product = this.productos[ItemIndex]
      //this.router.navigate(['./Edita',id], {relativeTo:this.RutaActiva});  // Outlet generico hijo!!!
  }

  onSubmit(){
    if (this.nuevo){
      this.nuevo = false;
      this.editing = false
      this.productosService.NuevoProducto(this.product);
    }
    else{
    this.productosService.UpdateProducto(this.product);
    this.editing = false;
    //this.router.navigate(["./.."],  {relativeTo:this.RutaActiva})
    }
  }

  Eliminar(id){
    this.productosService.EliminaProducto(id);
  }

  Nuevo(){
    this.nuevo = true;
    this.product = ProductoNuevo(0,"","","","","","","");
    this.editing = true;
  }
}
