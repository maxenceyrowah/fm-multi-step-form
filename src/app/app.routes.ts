import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'step-form',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/views.routes').then((m) => m.ViewsRoutes),
  },
];
