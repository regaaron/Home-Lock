import { Component, Input, input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Casas } from '../../casas';
import { CasasService } from '../../servicios/casas.service';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from '../calendario/calendario.component';
import { FormsModule } from '@angular/forms';
import { CalendarioBasicoComponent } from '../calendario-basico/calendario-basico.component';

@Component({
  selector: 'app-casaunica',
  standalone: true,
  imports: [RouterModule, CommonModule,CalendarioComponent,FormsModule,CalendarioBasicoComponent],
  templateUrl: './casaunica.component.html',
  styleUrl: './casaunica.component.css'
})
export class CasaunicaComponent {

  fechaEntrada: string = '';
  fechaSalida: string = '';

  guardarFechas() {
    console.log('Fecha de entrada:', this.fechaEntrada);
    console.log('Fecha de salida:', this.fechaSalida);
    // Aquí puedes realizar las operaciones que necesites con las fechas
  }

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
