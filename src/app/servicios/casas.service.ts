import { Injectable } from '@angular/core';
import { CASAS } from '../airbnb';
import { Casas } from '../casas';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  private casas: Casas[] = CASAS;
  casasanfrition: Casas[] = [];

  constructor() { }

  getCasas() : Casas[]{
    return this.casas;
  }

  getUnaCasa(posicion:number): Casas{
    return this.casas[posicion];
  }

  casa(texto: string): Casas[]{
    let x = 0;
    for(let i = 0; i < this.casas.length ; i++){
      if(this.casas[i].anfitrion == texto ){
        this.casasanfrition[x] = this.casas[i];
        x++;
      }
    }
    return this.casasanfrition;
  }

  searchUnaCasa(nomanfitrion: string): number{
    let index = this.casas.findIndex(p => p.anfitrion === nomanfitrion);
    console.log("hola entre aqui");
    return index;
  }

}
