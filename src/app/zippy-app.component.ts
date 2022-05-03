import { Component } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { ZippyComponent } from './zippy.component';

@Component({
  imports: [CapitalizePipe, ZippyComponent],
  // Intentionally use `zippy` prefix for the root component
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'zippy-app',
  standalone: true,
  template: `
    <app-zippy label="Click me">
      {{ title | capitalize }}
    </app-zippy>
  `,
})
export class ZippyAppComponent {
  title = 'Standalone Application';
}
