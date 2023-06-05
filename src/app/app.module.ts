import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardarComponent } from './componentes/guardar/guardar.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { EliminarComponent } from './componentes/eliminar/eliminar.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VolcanService } from './service/volcan.service';

@NgModule({
  declarations: [
    AppComponent,
    GuardarComponent,
    ListarComponent,
    EditarComponent,
    EliminarComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VolcanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
