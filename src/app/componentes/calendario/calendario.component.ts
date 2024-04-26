import {Component} from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-calendario',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {
  minDate: Date;
  

  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const today = new Date(); // Obtiene la fecha actual
 this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);

    
  }
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  
 


  getNumberOfDays(): number | null {
    const startDate = this.range.controls.start.value;
    const endDate = this.range.controls.end.value;

    // Verificar si se han seleccionado ambas fechas
    if (startDate && endDate) {
      // Calcular la diferencia entre las fechas en milisegundos
      const differenceMs = endDate.getTime() - startDate.getTime();
      // Convertir la diferencia en días
      return Math.round(differenceMs / (1000 * 60 * 60 * 24));
    } else {
      return null; // Devolver null si no se han seleccionado ambas fechas
    }
  }

  
}
