import { Component, signal, OnInit, inject } from '@angular/core';
import { TutorService } from '../../services/tutor.service';

export interface TutorUIProfile {
  id: number;
  name: string;
  language: string;
  country: string;
  hourlyRate: number;
  rating: number;
  bio: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-tutors',
  standalone: true,
  imports: [],
  templateUrl: './tutors.component.html',
  styleUrl: './tutors.component.css'
})
export class TutorsComponent implements OnInit {
  tutors = signal<TutorUIProfile[]>([]);
  private tutorService = inject(TutorService);

  ngOnInit() {
    // Consumimos el API Real de Spring Boot con Signals
    this.tutorService.getTutors().subscribe({
      next: (data) => {
        this.tutors.set(data);
      },
      error: (err) => {
        console.error('Error conectando a Spring Boot', err);
        // Dejamos vacío el estado en caso de error de conexión
        this.tutors.set([]); 
      }
    });
  }
}
