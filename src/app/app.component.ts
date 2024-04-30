import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { DescubreComponent } from './componentes/descubre/descubre.component';
import { AboutComponent } from './componentes/about/about.component';
import { RegistrosComponent } from './componentes/registros/registros.component';
import { HFavComponent } from './componentes/hfav/hfav.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,HomeComponent,DescubreComponent,RegistrosComponent,AboutComponent,HFavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto';
}
