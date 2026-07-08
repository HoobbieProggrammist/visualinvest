import { Component } from '@angular/core';
import { MobileService } from '../../mobile.service';
import { MobileNavbarComponent } from './mobile-navbar';

@Component({
  selector: 'app-m-home',
  imports: [MobileNavbarComponent],
  template: `
  <div class="mobile-page">
    <app-mobile-navbar />
    <div class="mobile-hero">
      <h1>I Valori della Connessione</h1>
      <p>Supportiamo fondazioni e istituzioni culturali con dati, identità e strategie digitali.</p>
    </div>

    <div class="mobile-section">
      <h2>Chi Siamo</h2>
      <p>Siamo un'agenzia specializzata nel supporto a istituzioni culturali, fondazioni e organizzazioni che operano nella valorizzazione del patrimonio. Il nostro obiettivo è aiutare i clienti a conoscere il proprio pubblico, rafforzare la propria identità e comunicare in modo efficace sui canali tradizionali e digitali.</p>
      <p>Mettiamo in contatto le aziende con i migliori produttori e fornitori, creando connessioni strategiche in molteplici settori per generare nuove opportunità di crescita e valorizzare ogni progetto.</p>
    </div>

    <div class="mobile-section">
      <h2>I Nostri Servizi</h2>
      <div class="mobile-card">
        <h3>Dati sui Pubblici</h3>
        <p>Raccolta, analisi e gestione dei dati dei visitatori con sistemi CRM e marketing automation.</p>
      </div>
      <div class="mobile-card">
        <h3>Brand Identity</h3>
        <p>Idee e sviluppo dell'identità di marca, immagine coordinata, segnaletica e materiali cartacei.</p>
      </div>
      <div class="mobile-card">
        <h3>Comunicazione Digitale</h3>
        <p>Strategie integrate, contenuti mirati e gestione dei canali web e social.</p>
      </div>
    </div>
  </div>`,
  styleUrl: './mobile.css'
})
export class MHomeComponent {
  constructor(public mobile: MobileService) {}
}
