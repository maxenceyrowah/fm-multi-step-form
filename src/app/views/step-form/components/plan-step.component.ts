import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-step',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="step === 2">Step {{ step }}</div>`,
})
export class PlanStepComponent {
  @Input() step: number | undefined;
}
