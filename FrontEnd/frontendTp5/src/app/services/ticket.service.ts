import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Espectador } from '../models/espectador';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http: HttpClient) { }

  public createTicket(ticket:Ticket):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    let body = JSON.stringify(ticket);
    return this._http.post("http://localhost:3000/api/ticket/", body, httpOptions);
  }

  public updateTicket(ticket: Ticket): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };
    let body = JSON.stringify(ticket);
    return this._http.put("http://localhost:3000/api/ticket/"+ticket._id, body, httpOptions);
  }


  public getTickets(espectador: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams().set('categoriaEspectador', espectador)
    }
    return this._http.get("http://localhost:3000/api/ticket/", httpOptions);
  }

  public getOneTicket(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/ticket/detalle/"+id, httpOptions);
  }

  public eliminarProducto(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams()
    };

    return this._http.delete("http://localhost:3000/api/ticket/" + id, httpOptions);
  }

  public getEspectador():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/espectador/", httpOptions);
  }

  public getOneEspectador(id: string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams()
    }
    return this._http.get("http://localhost:3000/api/espectador/"+id, httpOptions);
  }
}
