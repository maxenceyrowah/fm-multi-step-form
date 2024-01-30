import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-step',
  standalone: true,
  imports: [CommonModule],
  template: ` <div *ngIf="step === 4">Step {{ step }}</div>`,
})
export class SummaryStepComponent {
  @Input() step: number | undefined;
}
