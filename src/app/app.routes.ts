import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo';
import { ContattiComponent } from './pages/contatti/contatti';
import { MHomeComponent } from './pages/mobile/m-home';
import { MChiSiamoComponent } from './pages/mobile/m-chi-siamo';
import { MServicesComponent } from './pages/mobile/m-services';
import { MContattiComponent } from './pages/mobile/m-contatti';

export const routes: Routes = [
  { path: '', redirectTo: '/it', pathMatch: 'full' },
  { path: 'it', component: Home },
  { path: 'it/', component: Home },
  { path: 'it/services', loadComponent: () => import('./pages/services/services-page').then(m => m.ServicesPageComponent) },
  { path: 'it/services/siti-web-e-comunicazione', loadComponent: () => import('./pages/services/services-page').then(m => m.ServicesPageComponent) },
  { path: 'it/chi-siamo', component: ChiSiamoComponent },
  { path: 'it/chi-siamo/', component: ChiSiamoComponent },
  { path: 'it/contatti', component: ContattiComponent },
  { path: 'it/contatti/', component: ContattiComponent },
  { path: 'it/m', component: MHomeComponent },
  { path: 'it/m/chi-siamo', component: MChiSiamoComponent },
  { path: 'it/m/chi-siamo/', component: MChiSiamoComponent },
  { path: 'it/m/services', component: MServicesComponent },
  { path: 'it/m/contatti', component: MContattiComponent },
  { path: 'it/m/contatti/', component: MContattiComponent },
  { path: '**', redirectTo: '/it', pathMatch: 'full' },
];