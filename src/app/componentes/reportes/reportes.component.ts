import { Component } from '@angular/core';
import { Reserva} from '../reservas/reservas.component';
import { DateRange } from '@angular/material/datepicker';


@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent {
  reservas: Reserva[] = [];
  reservasAnteriores: Reserva[] = [];
  reservasPosteriores: Reserva[] = [];

  constructor() { }

  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas(): void {
    const reservasGuardadas: string | null = localStorage.getItem('reservas');

    if (reservasGuardadas) {
      this.reservas = JSON.parse(reservasGuardadas);

      // Obtener la fecha de hoy
      const hoy: Date = new Date();

      // Filtrar las reservas
      this.reservasAnteriores = this.reservas.filter(reserva => {
        const fechaInicio: Date = new Date(reserva.year1, reserva.mes1, reserva.dia1);
        return fechaInicio < hoy;
      });

      this.reservasPosteriores = this.reservas.filter(reserva => {
        const fechaInicio: Date = new Date(reserva.year1, reserva.mes1, reserva.dia1);
        return fechaInicio >= hoy;
      });
    }
  }
}


