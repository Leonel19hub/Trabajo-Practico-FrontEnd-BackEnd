import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlBase: string = "http://localhost:3000/api/";

  constructor(private _http:HttpClient) { }

  public createProducto(producto: Producto): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    let body = JSON.stringify(producto);
    return this._http.post(this.urlBase + "producto/", body, httpOptions);
  }


  public getProductos():Observable<any>{
    let httpOptions = {
      header: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/producto", httpOptions);
  }

  public getProductosDestacados():Observable<any>{
    let httpOptions = {
      header: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/producto/destacados", httpOptions);
  }

  public getProducto(id:string):Observable<any>{
    let httpOptions = {
      header: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/producto/detalle/"+id, httpOptions);
  }



  public eliminarProducto(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };

    return this._http.delete("http://localhost:3000/api/producto/" + id, httpOptions);
  }

}
