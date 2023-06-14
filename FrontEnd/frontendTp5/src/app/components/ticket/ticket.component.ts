import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets: Array<Ticket>
  espectador!:string;
  filtroTickets!:any[];

  constructor(private ticketService: TicketService, private router:Router) {
    this.tickets = new Array<Ticket>();
    this.obtenerTickets();
    console.log(this.espectador)
  }

  public buscar(){
    this.ticketService.getTickets(this.espectador).subscribe((result:any)=>{
      // this.filtroTickets = result;
      console.log(this.filtroTickets);
      this.tickets = []; // Limpiar el array antes de agregar los elementos de la búsqueda
      let unTicket: Ticket = new Ticket();
      result.forEach((element : any) => {
        Object.assign(unTicket, element);
        this.tickets.push(unTicket);
        unTicket = new Ticket();
      })
    })
  }

  public obtenerTickets(){
    this.ticketService.getTickets('0').subscribe((result:any)=>{
      console.log(result);
      let unTicket: Ticket = new Ticket();
      result.forEach((element : any) => {
        Object.assign(unTicket, element);
        this.tickets.push(unTicket);
        unTicket = new Ticket();
      })
    })
  }

  public guardarTicket(){
    this.router.navigate(["form-ticket", 0])
  }

  public modificarTicket(ticket: Ticket){
    this.router.navigate(["form-ticket", ticket._id])
  }

  public eliminarTicket(ticket: Ticket){
    this.ticketService.eliminarProducto(ticket._id).subscribe((result:any)=>{
      const index = this.tickets.indexOf(ticket);
      if(index > -1){
        this.tickets.splice(index, 1);
      }
    });
  }



  ngOnInit(): void {
  }

}
