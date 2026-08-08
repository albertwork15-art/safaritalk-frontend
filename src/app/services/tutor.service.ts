import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorUIProfile } from '../pages/tutors/tutors.component';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private http = inject(HttpClient);
  // Asumimos que tu backend de Java corre en el puerto por defecto 8080
  private apiUrl = 'http://localhost:8080/api/tutors';

  getTutors(): Observable<TutorUIProfile[]> {
    return this.http.get<TutorUIProfile[]>(this.apiUrl);
  }
}
