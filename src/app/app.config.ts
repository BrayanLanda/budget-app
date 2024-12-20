import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { DollarCircleOutline, LeftOutline, LockOutline, LogoutOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { jwtInterceptor } from './_interceptor/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient( withInterceptors([jwtInterceptor] ) ),
    provideClientHydration(),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-botton-right'
    }),
    {
      provide: NZ_ICONS,
      useValue: [UserOutline, LockOutline, LeftOutline, DollarCircleOutline, LogoutOutline]
    },
  ]
};
