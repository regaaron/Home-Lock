import { Component, Input } from '@angular/core';
import { MYImage } from '../../interfaces/myimage';
import { MImageService } from '../../servicios/mimage.service';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-hfav',
  standalone: true,
  imports: [],
  templateUrl: './hfav.component.html',
  styleUrl: './hfav.component.css'
})
export class HFavComponent {

  array:MYImage []=[];
  tipo: number=0;
  @Input() imagen!: MYImage;

  constructor(public ImageService: MImageService, public activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe(
      params =>{
      this.tipo= params['tipo'];
      }
    )
  }
  ngOnInit(){
    console.log("ya cargó el componente");
    this.array = this.ImageService.getMason();
    this.tipoHotel(this.array,this.tipo);
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
    this.tipoHotel(this.array, this.tipo);
  }

  tipoHotel(data:any, tipo:number):void{
    console.log("arreglo completo", data);
    console.log("tipo ", tipo);
    let aux: any[]=[];
    let c: number=0;
    for(let i in data){
      if(data[i].tipo==tipo){
        aux[c]=data[i];
        c++;
      }
    }
    this.array=aux;
    console.log("arreglo por tipo", this.array);
  }

}

