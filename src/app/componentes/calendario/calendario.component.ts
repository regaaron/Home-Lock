import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

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

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  getNumberOfDays(): void {
    console.log('startDate:', this.startDate);
    console.log('endDate:', this.endDate);

    if (this.startDate && this.endDate) {
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
