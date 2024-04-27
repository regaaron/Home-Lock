import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

import Swal from 'sweetalert2';
import { Reserva } from '../reservas/reservas.component';

@Component({
  selector: 'app-calendario',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {

  
  @Output() diasCalculados = new EventEmitter<number>();
  
  @Output() startcalc = new EventEmitter<Date>();
  
  @Output() endcalc = new EventEmitter<Date>();
  startDate: Date | null = null;
  endDate: Date | null = null;
  dias: number | null = null;

  minDate: Date;
  reservas: Reserva[] = []; 
  

  constructor() {
    const today = new Date(); // Obtener la fecha actual y la hora actual
    const reservasGuardadas: string | null = localStorage.getItem('reservas');

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

      this.dias = differenceInDays;
      console.log(this.dias);
      

      if (this.startDate < this.minDate) {
        Swal.fire("Fecha no permitida");
        this.startDate = null;
        this.endDate = null;
        this.dias = 0;
        this.diasCalculados.emit(this.dias);
        return; // Salir de la función
      }
      
      for (let i = 0; i < this.reservas.length; i++) {
        const reserva = this.reservas[i];

        let bandera = true;
        const day = 1;
        if(this.startDate.getMonth() == reserva.mes1 && this.endDate.getMonth() == reserva.mes1){
            if(this.endDate.getMonth() != reserva.mes2 && this.startDate.getDate() >= reserva.dia1){
              this.ventanareservada();
              console.log("hola1");
              return;
              
            }else if(this.endDate.getDate() > reserva.dia1){
                //si la fecha es menor que la primera donde los meses sean iguales de los registros
                if(((this.startDate.getDate()  <= reserva.dia2 || this.startDate.getDate()  >= reserva.dia1) 
                   && (this.endDate.getDate()  >= reserva.dia1 || this.endDate.getDate()  <= reserva.dia2 ))){
                    this.ventanareservada();
                    console.log("hola2");
                    return;
                   }
            }
        }else if(this.startDate.getMonth() == reserva.mes2 && this.endDate.getMonth() == reserva.mes2){
          if(this.endDate.getMonth() != reserva.mes1){
            if(this.startDate.getDate() <= reserva.dia2 ){
              this.ventanareservada();
            }
          }else if(this.endDate.getDate() > reserva.dia2){
            if(((this.startDate.getDate()  <= reserva.dia2 || this.startDate.getDate()  >= day) 
              && (this.endDate.getDate()  >= day || this.endDate.getDate()  <= reserva.dia2 ))){
                this.ventanareservada();
                console.log("hola3");
                return;
              }
          }
        }else if(this.startDate.getMonth() == reserva.mes1 && this.endDate.getMonth() == reserva.mes2){
          this.ventanareservada();
          console.log("hola4");
          return;
        }else{
          if(this.startDate.getDate()  >= reserva.dia2){
              bandera = false;
          }
          if(bandera){
            if(this.endDate.getDate() >= reserva.dia1){
              this.ventanareservada();
              console.log("hola5");
              return;
            }
          }else{
            this.ventanareservada();
            console.log("hola6");
            return;
          }
        }
      }    

      Swal.fire("Fecha reservada con exito");
      console.log(this.dias);
      
      this.diasCalculados.emit(this.dias);
      this.startcalc.emit(this.startDate);
      this.endcalc.emit(this.endDate);

    } else {
      this.dias = 0;
    }
  }
  
  ventanareservada(){
    Swal.fire("Fecha ya reservada");
    this.startDate = null;
    this.endDate = null;
    this.dias = 0;  
    this.diasCalculados.emit(this.dias);
    return;
  }

}
