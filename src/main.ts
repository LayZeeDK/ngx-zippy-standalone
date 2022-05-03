import {
  ApplicationInitStatus,
  ApplicationRef,
  enableProdMode,
  ErrorHandler,
  IterableDiffers,
  ɵbootstrapApplication,
} from '@angular/core';

import { ZippyAppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

ɵbootstrapApplication({
  appProviders: [
    ErrorHandler,
    ApplicationRef,
    ApplicationInitStatus,
    IterableDiffers,
  ],
  rootComponent: ZippyAppComponent,
}).catch((err) => console.error(err));
