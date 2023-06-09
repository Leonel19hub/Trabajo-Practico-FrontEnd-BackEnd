import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-mostrar-transacciones',
  templateUrl: './mostrar-transacciones.component.html',
  styleUrls: ['./mostrar-transacciones.component.css']
})
export class MostrarTransaccionesComponent implements OnInit {

  transacciones: Array<Transaccion>;
  monedaOrigen!:string;
  monedaDestino!:string;
  operaciones!:any[];

  constructor(private serviceTransaccion: TransaccionService) {
    this.transacciones = new Array<Transaccion>();
    // this.obtenerTransacciones();
    console.log(this.monedaDestino)
  }

  public buscar(){
    this.serviceTransaccion.getTransacciones(this.monedaOrigen, this.monedaDestino).subscribe((result:any)=>{
      this.operaciones = result;
      console.log(this.operaciones)
    })
  }

  ngOnInit(): void {
  }

  // public obtenerTransacciones(){
  //   this.serviceTransaccion.getTransacciones().subscribe((result:any)=>{
  //     console.log(result);
  //     let unaTransaccion : Transaccion = new Transaccion();
  //     result.forEach((element:any) =>{
  //       Object.assign(unaTransaccion,element);
  //       this.transacciones.push(unaTransaccion);
  //       unaTransaccion = new Transaccion();
  //     })
  //   })
  // }

}
