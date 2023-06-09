import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { CargarProductoComponent } from './components/cargar-producto/cargar-producto.component';

const routes: Routes = [
  {path:"mostrar-productos-destacados", component: MostrarProductoComponent},
  {path:"listado-productos", component: ListadoProductoComponent},
  {path:"cargar-producto/:id", component: FormProductoComponent},
  {path:"guardar-producto", component: CargarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
