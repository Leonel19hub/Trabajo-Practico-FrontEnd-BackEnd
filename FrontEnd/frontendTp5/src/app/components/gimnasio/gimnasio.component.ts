import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { GimnasioService } from 'src/app/services/gimnasio.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-gimnasio',
  templateUrl: './gimnasio.component.html',
  styleUrls: ['./gimnasio.component.css']
})
export class GimnasioComponent implements OnInit {

  productos: Array<Producto>
  constructor(private productoService:ProductoService, private gimnasioService: GimnasioService) {
    this.productos = new Array<Producto>();
  }

  ngOnInit(): void {
    this.listarProductos();
  }

  public listarProductos(){
    this.productoService.getProductos().subscribe((result:any)=>{
      this.productos = result;
      console.log(this.productos);
    })
  }

  public crearOrden(producto: Producto){
    this.gimnasioService.createOrder(producto).subscribe((result:any) => {
      console.log(result);
      window.location.href = result.init_point;
    });
  }

}
