import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-calendario-basico',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule],
  templateUrl: './calendario-basico.component.html',
  styleUrl: './calendario-basico.component.css'
})
export class CalendarioBasicoComponent {
    selected: Date | null = null;
}
