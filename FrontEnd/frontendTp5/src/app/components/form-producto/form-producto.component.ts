import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  producto:Producto;
  accion: string="";
  band!:number;

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.producto = new Producto()
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == '0') {
        this.accion = "new";
        this.band = 0;
      }
      else{
        this.accion = "update";
        this.band = 1;
        this.cargarProducto(params['id']);
      }
    })
  }

  cargarProducto(id:string){
    this.productoService.getProducto(id).subscribe((result:any)=>{
      console.log("producto")
      console.log(result);
      Object.assign(this.producto,result);
    })
  }

  public guardarProducto(){
    console.log(this.producto)
    this.productoService.createProducto(this.producto).subscribe((result:any)=>{
      if(result.status == 1){
        console.log(this.producto)
        alert(result.msg);
      }
    })
  }

}
