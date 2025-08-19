import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { customHeaderInterceptor, PasswordHashInterceptor } from '../services/password-hash-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideHttpClient(withInterceptors([customHeaderInterceptor])),
    provideHttpClient(withInterceptorsFromDi()),

    {provide: HTTP_INTERCEPTORS,useClass: PasswordHashInterceptor, multi:true}
    //provideInterceptor([PasswordHashInterceptor])
  ]
};
