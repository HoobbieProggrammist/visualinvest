import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class MobileService {
  constructor(private router: Router) {}

  goDesktop() {
    sessionStorage.setItem('force-desktop', 'true');
    const url = this.router.url.replace('/it/m', '/it') || '/it';
    this.router.navigateByUrl(url);
  }

  goMobile() {
    sessionStorage.removeItem('force-desktop');
    const url = this.router.url.replace('/it', '/it/m');
    this.router.navigateByUrl(url);
  }
}
