import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router){
    
  }
  buscarcasa(nombre: string){
    this.router.navigate(['/buscador',nombre]);
  }
}
