import { Component, inject } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AccountService } from '../../_services/account.service';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterModule, NzIconModule, NzLayoutModule, NzMenuModule, NzButtonModule, NzAvatarModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {
  private accountService = inject(AccountService);
  private router = inject(Router);
  sidebarItems = [
    { label: 'Gastos', icon: 'dollar-circle', url: './list' },
    { label: 'Perfil', icon: 'user', url: './profile' },
  ]

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
