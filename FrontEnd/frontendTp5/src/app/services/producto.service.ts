import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private _http:HttpClient) { }

  public guardarProducto():Observable<any>{
    const httpOptions = {
      header: new Headers({

      })
    };
    return this._http.post("", httpOptions);
  }

  public getProductosDestacados():Observable<any>{

    return this._http.get("");
  }
}
