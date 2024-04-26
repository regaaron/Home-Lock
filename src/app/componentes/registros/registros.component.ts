import { Component } from '@angular/core';
import { Reserva} from '../reservas/reservas.component';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {
  reservas: Reserva[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas(): void {
    const reservasGuardadas: string | null = localStorage.getItem('reservas');

    if (reservasGuardadas) {
      this.reservas = JSON.parse(reservasGuardadas);
    }
  }
}
