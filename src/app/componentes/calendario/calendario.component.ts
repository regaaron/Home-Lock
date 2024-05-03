import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

import Swal from 'sweetalert2';
import { Reserva } from '../reservas/reservas.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CasasService } from '../../servicios/casas.service';
import { ActivatedRoute } from '@angular/router';
import { Casas } from '../../casas';

@Component({
  selector: 'app-calendario',
  standalone: true,
  providers: [provideNativeDateAdapter(),    { provide: MAT_DATE_LOCALE, useValue: 'es' } ],
  imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {

    

  @Output() diasCalculados = new EventEmitter<number>();
  
  @Output() startcalc = new EventEmitter<Date>();
  
  @Output() endcalc = new EventEmitter<Date>();

  
  @Output() dire = new EventEmitter<string>();
  startDate: Date | null = null;
  endDate: Date | null = null;
  dias: number | null = null;

  minDate: Date;
  reservas: Reserva[] = []; 
  @Input() casa!: Casas;
  

  constructor(private snackBar: MatSnackBar,public casaService : CasasService, public activatedRoute: ActivatedRoute) {
    const today = new Date(); // Obtener la fecha actual y la hora actual
    const reservasGuardadas: string | null = localStorage.getItem('reservas');
    activatedRoute.params.subscribe(
      params =>{
        this.casa = casaService.getUnaCasa(params['ids']);
      }
    );
    console.log(this.casa.direccion);
    
    if (reservasGuardadas) {
      this.reservas = JSON.parse(reservasGuardadas);
    }
    this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // Establecer la fecha mínima con solo la fecha, sin la hora
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  

  getNumberOfDays(): void {
    if (this.startDate && this.endDate) {

      const startTimeStamp = this.startDate.getTime();
      const endTimeStamp = this.endDate.getTime();

      const differenceInMilliseconds = Math.abs(endTimeStamp - startTimeStamp);
      const millisecondsInDay = 1000 * 60 * 60 * 24;
      const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInDay);

      this.dias = differenceInDays + 1;
      // if(this.dias == 0){
      //   this.dias = 1;
      // }
      console.log(this.dias);
      
      if (this.startDate < this.minDate) {
        Swal.fire("Fecha no permitida");
        this.range.reset();
        this.startDate = null;
        this.endDate = null;

        // alert(this.endDate);
        this.dias = 0;
        this.diasCalculados.emit(this.dias);
        return; // Salir de la función
      }
      
      for (let i = 0; i < this.reservas.length; i++) {
        const reserva = this.reservas[i];

        const day = 1;
        if(this.casa.direccion == reserva.casa.direccion){
        if(this.startDate.getMonth() == reserva.mes1 && this.endDate.getMonth() == reserva.mes1){
            if(this.endDate.getMonth() != reserva.mes2 && this.startDate.getDate() >= reserva.dia1){
              this.ventanareservada(reserva.casa.direccion);
              console.log("hola1");
              return;
              
            }else {
                //si la fecha es menor que la primera donde los meses sean iguales de los registros
                if(((this.startDate.getDate()  <= reserva.dia2 && this.startDate.getDate()  >= reserva.dia1) 
                   || (this.endDate.getDate()  >= reserva.dia1 && this.endDate.getDate()  <= reserva.dia2 ))){
                    this.ventanareservada(reserva.casa.direccion);
                    console.log("hola2");
                    return;
                   }
            }
        }else if(this.startDate.getMonth() == reserva.mes2 && this.endDate.getMonth() == reserva.mes2){
                
          if(this.endDate.getMonth() != reserva.mes1){
            if(this.startDate.getDate() <= reserva.dia2 ){
              this.ventanareservada(reserva.casa.direccion);
            }
          }else if(this.endDate.getDate() > reserva.dia2){
            if(((this.startDate.getDate()  <= reserva.dia2 || this.startDate.getDate()  >= day) 
              && (this.endDate.getDate()  >= day || this.endDate.getDate()  <= reserva.dia2 ))){
                this.ventanareservada(reserva.casa.direccion);
                console.log("hola3");
                return;
              }
          }
        }else if(this.startDate.getMonth() == reserva.mes1 && this.endDate.getMonth() == reserva.mes2){
          this.ventanareservada(reserva.casa.direccion);
          console.log("hola4");
          return;
        }else {
          
          // if(this.startDate.getDate()  <= reserva.dia1){
          //   console.log("hola7");
          //     bandera = false;
          // }
          // if(bandera){
          //   if(this.endDate.getDate() >= reserva.dia1){
          //     this.ventanareservada();
          //     console.log("hola5");
          //     return;
          //   }
          // }else{
          //   this.ventanareservada();
          //   console.log("hola6");
          //   return;
          // }
        }
      } 
    }   

      // Swal.fire("Fecha reservada con exito");
      // this.snackBar.open('Message archived', 'Undo');
      this.snackBar.open('Reservacion agregada', 'ok', {
        duration: 3000
      });

      console.log(this.dias);
      
      this.diasCalculados.emit(this.dias);
      this.startcalc.emit(this.startDate);
      this.endcalc.emit(this.endDate);

    } else {
      this.dias = 0;
      // this.endDate = null; 
    }
  }
  
  ventanareservada(dire: string){
    console.log(dire);
    console.log(this.casa.direccion);
    Swal.fire("Fecha ya reservada");
    this.range.reset();
    this.startDate = null;
    this.endDate = this.startDate;
    this.dias = 0;  
    this.diasCalculados.emit(this.dias);
    return;
  }

}
