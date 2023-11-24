import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { GooServiceService } from 'src/app/services/goo-service.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarioGoogle:any=null;
  idCalendario:string = "97f9032e1a8f4391ff357f3f80383d872874286ce42c838b4521a326c773e347@group.calendar.google.com";

  fromDate: string="";
  toDate: string="";
  event:any =
  {
    kind: "calendar#event",
    status: "confirmed",
    summary: "Reunion de prueba desde angular",
    creator: {
      "email": "leonel19coraite@gmail.com"
    },
    start: {
      dateTime: "2023-07-24T13:30:00-03:00",
      timeZone: "America/Argentina/Jujuy"
    },
    end: {
      dateTime: "2023-07-24T14:30:00-03:00",
      timeZone: "America/Argentina/Jujuy"
    }
  }

  constructor(private gooService: GooServiceService) { }

  ngOnInit(): void {
    this.gooService.configureSingleSingOne();
  }

  login(){
    this.gooService.login();
  }

  logout(){
    this.gooService.logout();
  }

  verEventos(){
    idCalendario: String;
    this.gooService.getEvents(this.idCalendario).subscribe((result:any) => {
      this.calendarioGoogle = result;
      alert(JSON.stringify(this.calendarioGoogle));
    },
    error => {
      console.log(error)
    })
  }

  postEvent(){
      //let fechafrom:Date = new Date(this.fromDate);
      //let fechato:Date = new Date(this.toDate);
      //this.event.start.dateTime = this.toIsoString(fechafrom);
      //this.event.end.dateTime = this.toIsoString(fechato);
      //pasamos por ahora el JSON event en forma estática this.event
      this.gooService.createEvent(this.event, this.idCalendario).subscribe(
        (result:any)=>{
        console.log(result);
      },
        error=>{
        console.log(error);
      }
    )
  }

  //METODO interno que se utiliza para obtener el formato
  //que se requiere en la API de google Calendar. Ej. 2022-06-20T17:04:00-03:00
  toIsoString(date:Date) {
    var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num:any) {
        return (num < 10 ? '0' : '') + num;
      };
    return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      dif + pad(Math.floor(Math.abs(tzo) / 60)) +
      ':' + pad(Math.abs(tzo) % 60);
  }

  token(){
    alert(this.gooService.getToken())
  }


}
