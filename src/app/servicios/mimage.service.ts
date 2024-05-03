import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { MYImage } from '../interfaces/myimage';
import { MASON } from '../masonry';

@Injectable({
  providedIn: 'root'
})
export class MImageService {

  urlApi:string="https://masonryabnb.free.beeceptor.com";
  
  private mason: MYImage[] = MASON;

  constructor(private http: HttpClient) { }

  getMason() : MYImage[]{
    return this.mason;
  }

  retornar(){

    return this.http.get(this.urlApi).pipe(take(1))
  }
}
