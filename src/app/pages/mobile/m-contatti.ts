import { Component } from '@angular/core';
import { MobileService } from '../../mobile.service';
import { MobileNavbarComponent } from './mobile-navbar';

@Component({
  selector: 'app-m-contatti',
  imports: [MobileNavbarComponent],
  template: `
  <div class="mobile-page">
    <app-mobile-navbar />
    <div class="mobile-section">
      <h2>Contatti</h2>
      <p><strong>VisualInvest</strong></p>
      <p>Via Roma, 15</p>
      <p>20121 MILANO, ITALIA</p>
      <p>Tel: +39 02 1234567</p>
      <p>Email: info@visualinvest.it</p>
      <p>PARTITA IVA 12345678901</p>
    </div>

  </div>`,
  styleUrl: './mobile.css'
})
export class MContattiComponent {
  constructor(public mobile: MobileService) {}
}
