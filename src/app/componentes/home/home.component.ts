import { Component } from '@angular/core';
import { Casas } from '../../casas';
import { CasasService } from '../../servicios/casas.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  miscasas: Casas[] = [];

  constructor(public miservicio: CasasService){
    console.log("constructos de casas");
  }

  ngOnInit(): void{
    console.log("ngOnInit");
    this.miscasas = this.miservicio.getCasas();
    console.log(this.miscasas);
    
  }

}
