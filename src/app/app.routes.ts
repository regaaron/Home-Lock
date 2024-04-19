import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { DescubreComponent } from './componentes/descubre/descubre.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';


export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home' ,component: HomeComponent},
    {path: 'about' ,component: AboutComponent},
    {path: 'descubre', component: DescubreComponent},
    {path: 'reportes',component: ReportesComponent},
];
