import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GimnasioService {

  urlBase: string = "http://localhost:3000/api/";

  constructor(private _http:HttpClient) { }

  public createOrder(producto: Producto): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    let body = JSON.stringify(producto);
    return this._http.post(this.urlBase + "mp/create-orden", body, httpOptions);
  }
}
