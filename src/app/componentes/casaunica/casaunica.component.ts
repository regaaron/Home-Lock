import { Component, Input, input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Casas } from '../../casas';
import { CasasService } from '../../servicios/casas.service';

@Component({
  selector: 'app-casaunica',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './casaunica.component.html',
  styleUrl: './casaunica.component.css'
})
export class CasaunicaComponent {

  @Input() casa!: Casas;
  constructor(public casaService : CasasService, public activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe(
      params =>{
        this.casa = casaService.getUnaCasa(params['id'])
      }
    );
  }

  generarArreglo(length: number): any[] {
    return Array.from({ length });
  }

  redondeo(numero : number) : number{
    return Math.round(numero);
  }
}
