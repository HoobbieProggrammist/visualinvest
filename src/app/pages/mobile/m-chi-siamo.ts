import { Component } from '@angular/core';
import { MobileService } from '../../mobile.service';
import { MobileNavbarComponent } from './mobile-navbar';

@Component({
  selector: 'app-m-chi-siamo',
  imports: [MobileNavbarComponent],
  template: `
  <div class="mobile-page">
    <app-mobile-navbar />
    <div class="mobile-section">
      <h2>Chi Siamo</h2>
      <p>Siamo un'agenzia specializzata nel supporto a istituzioni culturali, fondazioni e organizzazioni che operano nella valorizzazione del patrimonio. Il nostro obiettivo è aiutare i clienti a conoscere il proprio pubblico, rafforzare la propria identità e comunicare in modo efficace sui canali tradizionali e digitali.</p>
      <p>Mettiamo in contatto le aziende con i migliori produttori e fornitori, creando connessioni strategiche in molteplici settori per generare nuove opportunità di crescita e valorizzare ogni progetto.</p>
      <p>Con un approccio integrato tra dati, creatività e strategia digitale, accompagniamo le istituzioni culturali nel rafforzare la propria presenza, valorizzare la propria missione e costruire relazioni significative con il proprio pubblico.</p>
    </div>

  </div>`,
  styleUrl: './mobile.css'
})
export class MChiSiamoComponent {
  constructor(public mobile: MobileService) {}
}
