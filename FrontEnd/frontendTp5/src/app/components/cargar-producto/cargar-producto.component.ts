import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-cargar-producto',
  templateUrl: './cargar-producto.component.html',
  styleUrls: ['./cargar-producto.component.css']
})
export class CargarProductoComponent implements OnInit {

  producto:Producto;

  constructor(private productoService: ProductoService) {
    this.producto = new Producto();
  }

  ngOnInit(): void {
  }

  public guardarProducto(){
    console.log(this.producto)
    this.productoService.createProducto(this.producto).subscribe((result:any) => {
      console.log(result)
    })
  }

}
