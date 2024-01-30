import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-ons-step',
  standalone: true,
  imports: [CommonModule],
  template: ` <div *ngIf="step === 3">Step {{ step }}</div>`,
})
export class AddonsStepComponent {
  @Input() step: number | undefined;
}
