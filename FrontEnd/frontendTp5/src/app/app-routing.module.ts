import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';

const routes: Routes = [
  {path:"mostrar-productos-destacados", component: MostrarProductoComponent},
  {path:"cargar-producto", component: FormProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
