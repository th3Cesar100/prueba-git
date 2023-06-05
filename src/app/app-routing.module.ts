import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './componentes/listar/listar.component';
import { GuardarComponent } from './componentes/guardar/guardar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'guardar', component: GuardarComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'eliminar', component: EliminarComponent},
  {path: 'buscar', component: BuscarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
