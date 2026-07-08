import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NgIf],
  host: { '[class.mobile-site]': 'isMobileSite' },
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  mobileMenuOpen = false;
  isMobileSite = false;

  constructor(private router: Router, public mobile: MobileService) {
    this.isMobileSite = this.router.url.startsWith('/it/m');
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.isMobileSite = e.urlAfterRedirects.startsWith('/it/m');
      const forceDesktop = sessionStorage.getItem('force-desktop') === 'true';
      if (forceDesktop || !this.isMobile()) return;
      const target = this.toMobile(e.urlAfterRedirects);
      if (target && target !== e.urlAfterRedirects) {
        this.router.navigateByUrl(target);
      }
    });
  }

  isMobile(): boolean {
    return typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
  }

  toMobile(url: string): string | null {
    const map: Record<string, string> = {
      '/it': '/it/m',
      '/it/': '/it/m',
      '/it/chi-siamo': '/it/m/chi-siamo',
      '/it/chi-siamo/': '/it/m/chi-siamo',
      '/it/services': '/it/m/services',
      '/it/services/': '/it/m/services',
      '/it/contatti': '/it/m/contatti',
      '/it/contatti/': '/it/m/contatti',
    };
    return map[url] ?? null;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}