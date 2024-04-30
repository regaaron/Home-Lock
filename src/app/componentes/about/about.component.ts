import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  // isActive: boolean = true;
  // isError: boolean = false;
  // isPrimary: boolean = true;

  // // Función para cambiar el estado de isActive
  // toggleActive() {
  //   this.isActive = !this.isActive;
  // }

  // // Función para cambiar el estado de isError
  // toggleError() {
  //   this.isError = !this.isError;
  // }
  // NgClass
}
