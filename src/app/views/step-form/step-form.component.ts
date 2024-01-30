import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepItemComponent } from '../step-item/step-item.component';

import { ISteps, STEPS } from 'src/app/shared/models/item.model';
import { PersonalStepComponent } from './components/personal-step.component';
import { AddonsStepComponent } from './components/add-ons-step.component';
import { PlanStepComponent } from './components/plan-step.component';
import { SummaryStepComponent } from './components/summary-step.component';

@Component({
  selector: 'app-step-form',
  standalone: true,
  imports: [
    CommonModule,
    StepItemComponent,
    PersonalStepComponent,
    AddonsStepComponent,
    PlanStepComponent,
    SummaryStepComponent,
  ],
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
