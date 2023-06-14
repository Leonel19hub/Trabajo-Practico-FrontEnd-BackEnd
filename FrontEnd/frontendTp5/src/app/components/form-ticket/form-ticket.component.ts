import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-form-ticket',
  templateUrl: './form-ticket.component.html',
  styleUrls: ['./form-ticket.component.css']
})
export class FormTicketComponent implements OnInit {

  ticket: Ticket;
  espectadores: Array<Espectador>;
  espectador:Espectador;
  accion:string = "";

  constructor(private serviceTicket: TicketService, private router:Router, private activaedRoute:ActivatedRoute) {
    this.ticket = new Ticket();
    this.espectadores = new Array<Espectador>();
    this.espectador = new Espectador();
    this.obtenerEspectador();
   }

  public guardarTicket(){
    this.serviceTicket.createTicket(this.ticket).subscribe();
    this.router.navigate(['/mostrar-tickets']);
  }

  public modificarTicket(){
    this.serviceTicket.updateTicket(this.ticket).subscribe();
    this.router.navigate(['/mostrar-tickets']);
  }

  ngOnInit(): void {
    this.activaedRoute.params.subscribe(params =>{
      if(params['id'] == 0){
        this.accion = "new";
      }
      else{
        this.accion = "update"
        this.cargarTicket(params['id']);
      }
    })
  }

  public cargarTicket(id: string){
    this.serviceTicket.getOneTicket(id).subscribe((result:any)=>{
      console.log(result)
      Object.assign(this.ticket, result);
      this.ticket.espectador = this.espectadores.find(item => (item._id == this.ticket.espectador._id))!;
      console.log(this.ticket.espectador)
    })
  }

  public cargarEspectador(id: string){
    this.serviceTicket.getOneEspectador(id).subscribe((result:any)=>{
      console.log(result)
      Object.assign(this.espectador, result);
    })
  }

  public obtenerEspectador(){
    this.serviceTicket.getEspectador().subscribe((result:any)=>{
      console.log(result);
      let unEspectador:Espectador = new Espectador();
      result.forEach((element:any)=>{
        Object.assign(unEspectador, element);
        this.espectadores.push(unEspectador);
        unEspectador = new Espectador();
      })
    })
  }

}
