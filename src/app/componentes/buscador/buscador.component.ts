import { Component } from '@angular/core';
import { CasaunicaComponent } from '../casaunica/casaunica.component';
import { Casas } from '../../casas';
import { CasasService } from '../../servicios/casas.service';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CasasanfitrionComponent } from '../casasanfitrion/casasanfitrion.component';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CasasanfitrionComponent],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  nombreh: string= "";
  indice:number=0;

  micasa:Casas={
    imagen1:"",
    imagen2:"",
    imagen3:"",
    imagen4:"",
    imagen5:"",  
    direccion: "",
    huespedes: 0,
    habitaciones: 0,
    camas: 0,
    bathrooms: 0,
    calificacion: 0,
    anfitrion: "",
    descripcion: "",
    servicios: "",
    precio: 0
  }

  constructor(private casaService: CasasService, private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params =>{
      this.nombreh=params['nombreh'];
      this.indice =this.casaService.searchUnaCasa(this.nombreh);
      console.log(this.indice);
      
      if(this.indice != -1){
        this.micasa = this.casaService.getUnaCasa(this.indice);
      }
    });
  }


}
