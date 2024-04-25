import { Component, Input } from '@angular/core';
import { Casas } from '../../casas';
import { CasasService } from '../../servicios/casas.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CalendarioComponent } from '../calendario/calendario.component';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CalendarioComponent,RouterLink],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  
  @Input() casa!: Casas;
  id: number = 0;
  constructor(public casaService : CasasService, public activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe(
      params =>{
        this.casa = casaService.getUnaCasa(params['ids']);
        this.id = params['ids'];
      }
    );
  }
  
  dias!: number;
  totalxnoche: number = 0;
  tarifa: number = 0;
  tarifa2: number = 0;
  impuestos: number = 0;
  sumatotal: number = 0;

  calculardias(numero : number){
    this.dias = numero;
    this.calculargastos(this.dias);
  }

  calculargastos(dias:number){
    this.totalxnoche = this.casa.precio *  dias;
    if(this.totalxnoche < 15000){
      this.impuestos = this.totalxnoche * .15;
      this.tarifa = this.totalxnoche * .15;
      this.tarifa2 = this.totalxnoche * .30;
    }else{
      this.tarifa = this.totalxnoche * .45;
    }
    this.sumatotal = this.totalxnoche + this.tarifa + this.tarifa2 + this.impuestos;  
  }
  
}
