import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'tutors',
        loadComponent: () => import('./pages/tutors/tutors.component').then(m => m.TutorsComponent)
    },
    {
        path: 'become-tutor',
        loadComponent: () => import('./pages/become-tutor/become-tutor.component').then(m => m.BecomeTutorComponent)
    }
];
