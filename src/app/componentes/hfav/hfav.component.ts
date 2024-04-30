import { Component } from '@angular/core';
import { MYImage } from '../../interfaces/myimage';
import { MImageService } from '../../servicios/mimage.service';

@Component({
  selector: 'app-hfav',
  standalone: true,
  imports: [],
  templateUrl: './hfav.component.html',
  styleUrl: './hfav.component.css'
})
export class HFavComponent {

  array:MYImage []=[];

  constructor(public ImageService: MImageService){

  }
  ngOnInit(){
    console.log("ya cargó el componente");
    this.recuperarDatos();
  }

  recuperarDatos():void{
    console.log("tomando datos ( •̀ ω •́ )✧...");
    this.ImageService.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {console.log(err)}
    });
  }

  successRequest(data:any):void{
    console.log("data", data);
    this.array = data.fotitos;
    console.log("array", this.array);
  }

}
