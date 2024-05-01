import { Component } from '@angular/core';
import { Casas } from '../../casas';
import { CasasService } from '../../servicios/casas.service';
import { RouterModule } from '@angular/router';
import { TruncateTextPipe } from "../../truncate-text.pipe";
import { CommonModule } from '@angular/common';
import { DomseguroPipe } from '../../domseguro.pipe';
import { MYImage } from '../../interfaces/myimage';
import { MImageService } from '../../servicios/mimage.service';


@Component({
  selector: 'app-descubre',
  standalone: true,
  imports: [RouterModule, TruncateTextPipe, CommonModule,DomseguroPipe,],
  templateUrl: './descubre.component.html',
  styleUrl: './descubre.component.css'
})
export class DescubreComponent {

  miscasas: Casas[] = [];
  misimagenes: MYImage[]=[];

  constructor(public miservicio: CasasService){
    console.log("constructos de casas");
  }

  ngOnInit(): void{
    console.log("ngOnInit");
    this.miscasas = this.miservicio.getCasas();
    console.log(this.miscasas);
    
  }

  title='videoseguro';
  video:string="xTj1kJgYuHU";

}
