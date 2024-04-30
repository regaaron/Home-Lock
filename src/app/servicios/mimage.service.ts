import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MImageService {

  urlApi:string="https://masonryabnb.free.beeceptor.com";

  constructor(private http: HttpClient) { }

  retornar(){

    return this.http.get(this.urlApi).pipe(take(1))
  }
}
