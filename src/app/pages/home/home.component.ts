import { Component, signal } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcomeMessage = signal('Aprende idiomas con tutores nativos en SafariTalk.');
  
  // Utilizando Signals para estado local sin RxJS
  showMoreFeatures = signal(false);

  toggleFeatures() {
    this.showMoreFeatures.update(val => !val);
  }
}
