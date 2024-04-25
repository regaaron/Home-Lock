import { Component } from '@angular/core';
import { Casas } from '../../casas';
import { CasasService } from '../../servicios/casas.service';
import { RouterModule } from '@angular/router';
import { TruncateTextPipe } from "../../truncate-text.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-descubre',
  standalone: true,
  imports: [RouterModule, TruncateTextPipe, CommonModule],
  templateUrl: './descubre.component.html',
  styleUrl: './descubre.component.css'
})
export class DescubreComponent {

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
