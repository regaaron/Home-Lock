import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

import Swal from 'sweetalert2';

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
  startDate: Date | null = null;
  endDate: Date | null = null;
  dias: number | null = null;

  minDate: Date;

  reserva1 = new Date(2024, 3, 30); 
  

  constructor() {
    const today = new Date(); // Obtener la fecha actual y la hora actual
    this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // Establecer la fecha mínima con solo la fecha, sin la hora
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  getNumberOfDays(): void {
    console.log('startDate:', this.startDate);
    console.log('endDate:', this.endDate);
    console.log("minDate" + this.minDate);

    if (this.startDate && this.endDate) {

      if (this.startDate < this.minDate) {
      
        Swal.fire("Fecha no permitida");
        this.startDate = null;
        this.endDate = null;
        return; // Salir de la función

      }

      
    // Comprobación de fecha reservada
      if (this.startDate.getTime()  === this.reserva1.getTime()) {
        Swal.fire("Fecha reservada");
        this.startDate = null;
        this.endDate = null;
        return; // Salir de la función
      }


      const startTimeStamp = this.startDate.getTime();
      const endTimeStamp = this.endDate.getTime();

      console.log('startTimeStamp:', startTimeStamp);
      console.log('endTimeStamp:', endTimeStamp);

      const differenceInMilliseconds = Math.abs(endTimeStamp - startTimeStamp);
      console.log('differenceInMilliseconds:', differenceInMilliseconds);

      const millisecondsInDay = 1000 * 60 * 60 * 24;
      const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInDay);

      console.log('differenceInDays:', differenceInDays);

      this.dias = differenceInDays;

      
    } else {
      this.dias = 0;
    }
    this.diasCalculados.emit(this.dias);
  }
  

}
