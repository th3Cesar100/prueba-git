import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Volcan } from 'src/app/entidad/Volcan';
import { VolcanService } from 'src/app/service/volcan.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {


  constructor(private router: Router, private service: VolcanService) { }

  volcanes !: Volcan[];

 

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listarVolcanes().subscribe(data => {
      console.log("volcanes ", data);
      this.volcanes = data;
    });
  }

  editar(volcan: Volcan) {
    localStorage.setItem("id", volcan.idVolca.toString());
    this.router.navigate(['editar']);
  }

  eliminar(volcan: Volcan) {
    localStorage.setItem("id", volcan.idVolca.toString());
    this.router.navigate(['eliminar']);
  }

}
