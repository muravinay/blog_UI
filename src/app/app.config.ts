import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,withComponentInputBinding()),
    provideHttpClient(),
    provideMarkdown(),
    // provideZoneChangeDetection({ eventCoalescing: true }), //optional for toastr
    // provideAnimations(),
    // provideToastr({
    //   timeOut: 3000,
    //   positionClass: 'toast-top-right',
    //   preventDuplicates: true
    // })

  ]
};
