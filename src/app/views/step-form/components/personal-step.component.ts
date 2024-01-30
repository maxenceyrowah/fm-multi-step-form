import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-personal-step',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="step === 1">
      <div class="flex flex-col gap-3">
        <div class="">
          <label for="name" class="text-marineBlue">Name</label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            class="rounded-lg outline-none border border-lightGray focus:border-coolGray py-3 px-5 mt-2 w-full"
          />
        </div>

        <div>
          <label for="email" class="text-marineBlue">Email Address</label>
          <input
            type="text"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            class="rounded-lg outline-none border border-lightGray focus:border-coolGray py-3 px-5 mt-2 w-full"
          />
        </div>

        <div>
          <label for="phone_number" class="text-marineBlue">Phone Number</label>
          <input
            type="text"
            id="phone_number"
            placeholder="e.g. +1 234 567 890"
            class="rounded-lg outline-none border border-lightGray focus:border-coolGray py-3 px-5 mt-2 w-full"
          />
        </div>
      </div>

      <div class="flex justify-end align-bottom">
        <button
          class="bg-marineBlue text-whiteNeutral px-7 py-3 rounded-lg relative top-9"
        >
          Next Step
        </button>
      </div>
    </div>
  `,
})
export class PersonalStepComponent {
  @Input() step: number | undefined;
}
