import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ISteps } from 'src/app/shared/models/item.model';

@Component({
  selector: 'app-step-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.scss'],
})
export class StepItemComponent {
  @Input({ required: true }) item!: ISteps;
  @Output() setColor = new EventEmitter<ISteps>();
}
