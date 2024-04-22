import { Injectable } from '@angular/core';
import { CASAS } from '../airbnb';
import { Casas } from '../casas';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  private casas: Casas[] = CASAS;

  constructor() { }

  getCasas() : Casas[]{
    return this.casas;
  }

  getUnaCasa(posicion:number): Casas{
    return this.casas[posicion];
  }

  searchUnaCasa(nomanfitrion: string): number{
    let index = this.casas.findIndex(p => p.anfitrion === nomanfitrion);
    return index;
  }

}
