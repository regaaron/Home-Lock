import { Component } from '@angular/core';
import { Casas } from '../../casas';
import { CasasService } from '../../servicios/casas.service';
import { RouterModule } from '@angular/router';
import { TruncateTextPipe } from "../../truncate-text.pipe";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, TruncateTextPipe, CommonModule]
})
export class HomeComponent {

  miscasas: Casas[] = [];

  constructor(public miservicio: CasasService){
    console.log("constructos de casas");
  }



  ngOnInit(): void{
    console.log("ngOnInit");
    // this.recuperarDatos();
    this.miscasas = this.miservicio.getCasas();
    // console.log(this.miscasas);
    
  }

  recuperarDatos(): void {
    this.miservicio.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {
        console.log("error");
        this.miscasas = this.miservicio.getCasas();
      }
    });
  }
  

   successRequest(data:any):void{
     this.miscasas = data.casas;
    //  this.miscasas = this.miservicio.getCasas(data.casas);
     
   }

}
