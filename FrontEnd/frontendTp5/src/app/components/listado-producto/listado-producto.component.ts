import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  productos!: Array<Producto>

  constructor(private productoService: ProductoService, private router: Router) {
    this.productos = new Array<Producto>();
    this.obtenerProductos();
  }

  ngOnInit(): void {
  }

  public obtenerProductos(){
    this.productoService.getProductos().subscribe((result:any)=>{
      console.log(result);
      let unProduto:Producto = new Producto();
      result.forEach((element : any) => {
        Object.assign(unProduto,element);
        this.productos.push(unProduto);
        unProduto = new Producto();
      });
    })
  }

  public modificarProducto(producto: Producto){
    this.router.navigate(["cargar-producto",producto._id]);
  }

  eliminarProducto(producto: Producto) {
    this.productoService.eliminarProducto(producto._id).subscribe(
      (result: any) => {
        // Eliminar el producto de la lista local
        const index = this.productos.indexOf(producto);
        if (index > -1) {
          this.productos.splice(index, 1);
        }
      },
      (error: any) => {
        // Manejar el error en caso de que ocurra
      }
    );
  }


}
