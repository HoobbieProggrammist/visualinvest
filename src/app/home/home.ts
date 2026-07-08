import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  scrollToAbout(event: Event) {
    event.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
}
