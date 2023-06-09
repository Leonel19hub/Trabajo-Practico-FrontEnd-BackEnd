import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { CargarProductoComponent } from './components/cargar-producto/cargar-producto.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { MostrarTransaccionesComponent } from './components/mostrar-transacciones/mostrar-transacciones.component';

const routes: Routes = [
  {path:"mostrar-productos-destacados", component: MostrarProductoComponent},
  {path:"listado-productos", component: ListadoProductoComponent},
  {path:"cargar-producto/:id", component: FormProductoComponent},
  {path:"guardar-producto", component: CargarProductoComponent},
  {path:"cargar-transaccion", component: TransaccionComponent},
  {path:"mostrar-transacciones", component: MostrarTransaccionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
