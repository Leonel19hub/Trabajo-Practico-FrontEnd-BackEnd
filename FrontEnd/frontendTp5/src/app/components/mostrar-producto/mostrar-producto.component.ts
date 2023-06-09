import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit {

  productos!: Array<Producto>

  constructor(private productoService: ProductoService) {
    this.productos = new Array<Producto>();
    this.obtenerProductos();
  }

  ngOnInit(): void {
  }

  public obtenerProductos(){
    this.productoService.getProductosDestacados().subscribe((result:any)=>{
      console.log(result);
      let unProduto:Producto = new Producto();
      result.forEach((element : any) => {
        Object.assign(unProduto,element);
        this.productos.push(unProduto);
        unProduto = new Producto();
      });
    })
  }



}
