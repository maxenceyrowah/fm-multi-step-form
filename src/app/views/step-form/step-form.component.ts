import { Component } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { StepItemComponent } from '../step-item/step-item.component';

import { ISteps, STEPS } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-step-form',
  standalone: true,
  imports: [CommonModule, StepItemComponent, NgTemplateOutlet],
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss'],
})
export class StepFormComponent {
  steps = STEPS;
  activeStep: number = 1;

  setActiveStep(item: ISteps) {
    this.steps = this.steps.map((step) => ({
      ...step,
      active: step.order === item.order && !item.active,
    }));
    this.activeStep = item.order;
  }
}
