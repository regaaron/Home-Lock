import { Component, Input } from '@angular/core';
import { Casas } from '../../casas';
import { CasasService } from '../../servicios/casas.service';
import { ActivatedRoute } from '@angular/router';
import { CalendarioComponent } from '../calendario/calendario.component';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CalendarioComponent],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  
  @Input() casa!: Casas;
  constructor(public casaService : CasasService, public activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe(
      params =>{
        this.casa = casaService.getUnaCasa(params['ids']);
      }
    );
  }
  
}