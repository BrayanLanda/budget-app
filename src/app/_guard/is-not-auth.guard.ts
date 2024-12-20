import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

export const isNotAuthGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
    const router = inject(Router);
  
    if(accountService.isAuthenticated()){
      router.navigateByUrl('/dashboard');
      return false;
    }
  return true;
};
