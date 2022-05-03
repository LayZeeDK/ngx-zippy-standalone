import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ButtonDirective } from './button.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonDirective],
  selector: 'app-zippy',
  standalone: true,
  template: `
    <button appButton (appClick)="onToggle()">
      {{ label }}
    </button>

    <div [hidden]="!isExpanded">
      <ng-content></ng-content>
    </div>
  `,
})
export class ZippyComponent {
  @Input()
  label = 'Toggle';

  isExpanded = false;

  onToggle() {
    this.isExpanded = !this.isExpanded;
  }
}
