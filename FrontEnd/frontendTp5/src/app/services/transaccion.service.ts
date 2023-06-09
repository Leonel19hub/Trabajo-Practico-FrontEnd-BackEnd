import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http: HttpClient) { }

  public getTransacciones(monedaOrigen:string, monedaDestino:string):Observable<any>{
    const httpOptions = {
      header: new HttpHeaders({

      }),
      params: new HttpParams()
        .set('monedaOrigen', monedaOrigen)
        .set('monedaDestino', monedaDestino)
    }
    return this._http.get("http://localhost:3000/api/transaccion/", httpOptions);
  }

  public createTransaccion(transaccion:Transaccion):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    let body = JSON.stringify(transaccion);
    return this._http.post("http://localhost:3000/api/transaccion/",body,httpOptions);
  }

  public convertMoney(cant:string, fromType:string, toType:string):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '0a1eb14551mshf885964aee99f9cp16dc39jsn86c595317698',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      }),
    }
    const body = new HttpParams()
      .set('from-value',cant)
      .set('from-type', fromType)
      .set("to-type", toType);
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body,httpOptions);
  }
}
