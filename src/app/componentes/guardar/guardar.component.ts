import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Volcan } from 'src/app/entidad/Volcan';
import { VolcanService } from 'src/app/service/volcan.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit {

  volcan : Volcan = new Volcan();

  constructor(private router: Router, private volcanService: VolcanService) { }


  ngOnInit(): void {
  }

  guardar() {
    this.volcanService.guardarVolcan(this.volcan).subscribe(data => {
      alert(" Se ha guardado con exito " + this.volcan.nombre);
      this.router.navigate(['listar']);
    })
  }

}
