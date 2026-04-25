import { Component } from '@angular/core';

@Component({
  selector: 'app-become-tutor',
  standalone: true,
  imports: [],
  templateUrl: './become-tutor.component.html',
  styleUrl: './become-tutor.component.css'
})
export class BecomeTutorComponent {

  submitApplication(event: Event) {
    event.preventDefault();
    alert('¡Aplicación enviada con éxito! Nos pondremos en contacto contigo pronto.');
  }
}
