
export interface IProductos{
        productId:number;
        productName:string;						
        productCode:string;
        releaseDate:string;
        price:number;
        description:string;
        starRating:number;
        imageUrl:string;

}

// Función que devuelve un JSON
export function ProductoNuevo(a,b,c,d,e,f,g,h):IProductos{

return {
                        productId:	a,
                        productName:	b,						
                        productCode:	c,
                        releaseDate:	d,
                        price:		e,
                        description:	f,
                        starRating:	g,
                        imageUrl:	h

}


}


export function ProductosToAJSON(data):IProductos[]{
return data["productos"].records.map( 
        (val)=>{  	// map ejecuta una función por cada elemento del array
                                  // El array es data["productos"].records y el elemento es "val"
                                  // Queremos devolver un json por cada elemento del array

                return ProductoNuevo(
                        val[0],
                        val[1],
                        val[2],
                        new Date(val[3]),
                        parseFloat(val[4]),
                        val[5],
                        parseFloat(val[6]),
                        val[7]
                );
        }
);
}



export function Productos1ToAJSON(data):IProductos[]{
return data["productos"].records.map( 
        (val)=>{  // map ejecuta una función por cada elemento del array
                  // El array es data["productos"].records y el elemento es "val"
                  // Queremos devolver un json por cada elemento del array

                return {	
                        productId:	val[0],
                        productName:	val[1],						
                        productCode:	val[2],
                        releaseDate:	new Date(val[3]),
                        price:		parseFloat(val[4]),
                        description:	val[5],
                        starRating:	parseFloat(val[6]),
                        imageUrl:	val[7]
                }
        }
);
}




