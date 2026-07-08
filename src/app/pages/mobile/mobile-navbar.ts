import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
  <div class="mobile-topbar">
    <a routerLink="/it/m" class="mobile-logo">
      <img src="https://i.imgur.com/znVHOMO.png" alt="VisualInvest" />
    </a>
    <nav class="mobile-topnav">
      <a routerLink="/it/m" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/it/m/chi-siamo" routerLinkActive="active">Chi Siamo</a>
      <a routerLink="/it/m/services" routerLinkActive="active">Servizi</a>
      <a routerLink="/it/m/contatti" routerLinkActive="active">Contatti</a>
    </nav>
  </div>`,
  styleUrl: './mobile.css'
})
export class MobileNavbarComponent {}
