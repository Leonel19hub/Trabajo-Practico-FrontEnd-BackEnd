import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  transaccion: Transaccion
  transacciones: Array<Transaccion>;

  modena!:any;
  cant!:string;
  fromType!:string;
  toType!:string;
  finalResult!:string;

  constructor(private serviceTransaccion: TransaccionService) {
    this.transaccion = new Transaccion();
    this.transacciones = new Array<Transaccion>();
    this.obtenerTransacciones();
  }

  ngOnInit(): void {
  }

  convertirMoneda(){
    this.serviceTransaccion.convertMoney(this.cant,this.fromType,this.toType).subscribe((resultado:any)=>{
      this.modena = resultado;
      this.finalResult = resultado.result;
      console.log(resultado);
      // Inicializo cada atributo de transaccion con los valores de la api de rapidapi y del formulario
      this.transaccion.monedaOrigen = this.fromType;
      this.transaccion.cantidadOrigen = Number(this.cant);
      this.transaccion.monedaDestino = this.toType;
      this.transaccion.cantidadDestino = Number(this.finalResult);
      this.transaccion.tasaConversion = Number(this.finalResult) / Number(this.cant);

      // guardamos los datos en nuestra api
      this.serviceTransaccion.createTransaccion(this.transaccion).subscribe(result=>{console.log(result)});
      console.log(this.finalResult);
    })
  }

  public realizarTransaccion(){
    this.serviceTransaccion.createTransaccion(this.transaccion).subscribe(result=>{
      console.log(result)
    })
  }

  public obtenerTransacciones(){
    this.serviceTransaccion.getTransacciones(this.fromType, this.toType).subscribe((result:any)=>{
      console.log(result);
      let unaTransaccion : Transaccion = new Transaccion();
      result.forEach((element:any) =>{
        Object.assign(unaTransaccion,element);
        this.transacciones.push(unaTransaccion);
        unaTransaccion = new Transaccion();
      })
    })
  }

}
