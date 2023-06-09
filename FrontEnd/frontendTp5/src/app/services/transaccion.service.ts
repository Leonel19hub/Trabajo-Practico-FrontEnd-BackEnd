import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http: HttpClient) { }

  public getTransacciones():Observable<any>{
    const httpOptions = {
      header: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/ticket/", httpOptions);
  }
}
