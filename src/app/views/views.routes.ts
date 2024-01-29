import { Routes } from '@angular/router';

export const ViewsRoutes: Routes = [
  {
    path: 'step-form',
    loadComponent: () =>
      import('./step-form/step-form.component').then(
        (m) => m.StepFormComponent
      ),
  },
];
