import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Volcan } from '../entidad/Volcan';


@Injectable({
  providedIn: 'root'
})
export class VolcanService {

  constructor(private httpClient: HttpClient) { }

  URL = 'http://localhost:9091/api/Volcan/';

  listarVolcanes() {
    return this.httpClient.get<Volcan[]>(this.URL + 'listar');
  }

  guardarVolcan(volcan: Volcan) {
    return this.httpClient.post<Volcan>(this.URL + 'guardar', volcan);
  }

  editarVolcan(volcan: Volcan) {
    return this.httpClient.post<Volcan>(this.URL + 'editar', volcan);
  }

  eliminarVolcan(volcan: Volcan) {
    return this.httpClient.post<Volcan>(this.URL + 'eliminar', volcan);
  }

  buscarVolcan(volcan: Volcan) {
    return this.httpClient.post<Volcan>(this.URL + 'buscar', volcan);
  }
}
