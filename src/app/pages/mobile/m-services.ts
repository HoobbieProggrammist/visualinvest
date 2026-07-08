import { Component } from '@angular/core';
import { MobileService } from '../../mobile.service';
import { MobileNavbarComponent } from './mobile-navbar';

@Component({
  selector: 'app-m-services',
  imports: [MobileNavbarComponent],
  template: `
  <div class="mobile-page">
    <app-mobile-navbar />
    <div class="mobile-section">
      <h2>I Nostri Servizi</h2>
      <p>Siamo un'agenzia specializzata nel supporto alle istituzioni culturali, fondazioni e organizzazioni che operano nel settore della cultura e della valorizzazione del patrimonio. Con un approccio integrato tra dati, creatività e strategia digitale, accompagniamo le istituzioni culturali nel rafforzare la propria presenza, valorizzare la propria missione e costruire relazioni significative con il proprio pubblico. Mettiamo in contatto le aziende con i migliori produttori e fornitori, creando connessioni strategiche in molteplici settori per generare nuove opportunità di crescita e valorizzare ogni progetto.</p>

      <h2>Raccolta, Analisi e Gestione dei Dati sui Pubblici</h2>
      <p>Raccolta e analisi dei dati dei visitatori attraverso dispositivi e canali digitali, monitoraggio costante del pubblico e progettazione di sistemi CRM con marketing automation per mantenere vive e personalizzate le relazioni con i diversi target.</p>

      <h2>Brand Identity e Immagine Coordinata</h2>
      <p>Ideazione o ridefinizione dell'identità di marca, sviluppo dell'immagine coordinata, creazione di segnaletica interna ed esterna e realizzazione di materiali di comunicazione cartacei (cataloghi, brochure, ecc.).</p>

      <h2>Strategie di Comunicazione e Marketing Digitale</h2>
      <p>Progettazione e realizzazione di strategie di comunicazione integrate (tradizionali e digitali), creazione di contenuti mirati, gestione dei canali web e social, e ottimizzazione delle campagne basate sull'analisi dei dati e sulle esperienze di visita del pubblico.</p>

      <h2>Ricerca e Qualifica di Fornitori e Clientela</h2>
      <p>Analisi delle materie prime negoziazione e gestione della qualità lungo tutta la supply chain</p>
      <p>Ottimizzazione dei processi produttivi e supervisione del ciclo di creazione del prodotto per garantire uno standard elevato ed efficiente </p>
      <p>Valutazione e selezione di partner commerciali e clienti in base a criteri di qualità, affidabilità e sinergia</p>
    </div>
  </div>`,
  styleUrl: './mobile.css'
})
export class MServicesComponent {
  constructor(public mobile: MobileService) {}
}
