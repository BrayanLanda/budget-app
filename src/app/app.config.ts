import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { DollarCircleFill, DollarCircleOutline, FastBackwardOutline, LeftOutline, LockOutline, LogoutOutline, UserOutline } from '@ant-design/icons-angular/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    {
      provide: NZ_ICONS,
      useValue: [UserOutline, LockOutline, LeftOutline, DollarCircleOutline, LogoutOutline]
    },
  ]
};
