  import { Component, Input } from '@angular/core';
  import { Casas } from '../../casas';
  import { CasasService } from '../../servicios/casas.service';
  import { ActivatedRoute, Router, RouterLink } from '@angular/router';
  import { CalendarioComponent } from '../calendario/calendario.component';
  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-reservas',
    standalone: true,
    imports: [CalendarioComponent,RouterLink, FormsModule],
    templateUrl: './reservas.component.html',
    styleUrl: './reservas.component.css'
  })
  export class ReservasComponent {
    
    @Input() casa!: Casas;
    id: number = 0;
    constructor(public casaService : CasasService, public activatedRoute: ActivatedRoute,private router: Router){
      activatedRoute.params.subscribe(
        params =>{
          this.casa = casaService.getUnaCasa(params['ids']);
          this.id = params['ids'];
        }
      );
    }
    
    nombre: string = "";
    correo: string = "";
    telefono!: number;
    direccionuser: string = "";

    dias!: number;
    totalxnoche: number = 0;
    tarifa: number = 0;
    tarifa2: number = 0;
    impuestos: number = 0;
    sumatotal: number = 0;

    calculardias(numero : number){
      this.dias = numero;
      this.calculargastos(this.dias);
    }

    calculargastos(dias:number){
      this.totalxnoche = this.casa.precio *  dias;
      if(this.totalxnoche < 15000){
        this.impuestos = this.totalxnoche * .15;
        this.tarifa = this.totalxnoche * .15;
        this.tarifa2 = this.totalxnoche * .30;
      }else{
        this.tarifa = this.totalxnoche * .45;
      }
      this.sumatotal = this.totalxnoche + this.tarifa + this.tarifa2 + this.impuestos;  
    }

    guardarReserva() {
      console.log(this.nombre);
      
      const reserva: Reserva = {
        dias: this.dias,
        totalxnoche: this.totalxnoche,
        nombre: this.nombre,
        correo: this.correo,
        telefono: this.telefono,
        direccionuser: this.direccionuser,
        tarifa: this.tarifa,
        tarifa2: this.tarifa2,
        impuestos: this.impuestos,
        sumatotal: this.sumatotal,
        casa: {
          precio: this.casa.precio,
          imagen1: this.casa.imagen1,
          anfitrion: this.casa.anfitrion,
          calificacion: this.casa.calificacion,
          direccion: this.casa.direccion
        }
      };
  
      let reservasGuardadas: Reserva[] = JSON.parse(localStorage.getItem('reservas') || '[]');
      reservasGuardadas.push(reserva);
      localStorage.setItem('reservas', JSON.stringify(reservasGuardadas));

    this.router.navigate(['/descubre']);
    }  
    
  }

  export interface Reserva {
    dias: number;
    totalxnoche: number;
    nombre: string;
    correo: string;
    telefono: number;
    direccionuser: string;
    tarifa: number;
    tarifa2: number;
    impuestos: number;
    sumatotal: number;
    casa: {
      precio: number;
      imagen1: string;
      anfitrion: string;
      calificacion: number;
      direccion: string;
    };
  }