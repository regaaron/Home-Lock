import { Component, Input } from '@angular/core';
import { TruncateTextPipe } from '../../truncate-text.pipe';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Casas } from '../../casas';
import { CasasService } from '../../servicios/casas.service';

@Component({
  selector: 'app-casasanfitrion',
  standalone: true,
  imports: [TruncateTextPipe,RouterModule],
  templateUrl: './casasanfitrion.component.html',
  styleUrl: './casasanfitrion.component.css'
})
export class CasasanfitrionComponent {


  @Input() casasanfitrion!: Casas[];

  constructor(public casaService : CasasService, public activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe(
      params =>{
        this.casasanfitrion = casaService.casa(params['nombreh']);
        console.log(this.casasanfitrion);
        
      }
    );
  }


}
