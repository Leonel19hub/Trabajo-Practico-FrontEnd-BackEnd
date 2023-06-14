import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { CargarProductoComponent } from './components/cargar-producto/cargar-producto.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { MostrarTransaccionesComponent } from './components/mostrar-transacciones/mostrar-transacciones.component';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MostrarProductoComponent,
    FormProductoComponent,
    ListadoProductoComponent,
    CargarProductoComponent,
    TicketComponent,
    TransaccionComponent,
    MostrarTransaccionesComponent,
    FormTicketComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
