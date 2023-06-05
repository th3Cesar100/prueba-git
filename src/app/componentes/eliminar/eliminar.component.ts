import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Volcan } from 'src/app/entidad/Volcan';
import { VolcanService } from 'src/app/service/volcan.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor(private router: Router, private volcanService: VolcanService) { }

  volcan: Volcan = new Volcan();

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    let idVolcan = localStorage.getItem("id");
    this.volcan.idVolca = Number(idVolcan);
    this.volcanService.buscarVolcan(this.volcan).subscribe(data => {
      this.volcan = data;
    });
  }

  eliminar() {
    this.volcanService.eliminarVolcan(this.volcan).subscribe(data => {
      alert(" Se ha eliminado con exito " + this.volcan.nombre);
      this.router.navigate(['listar']);
    })
  }
}
