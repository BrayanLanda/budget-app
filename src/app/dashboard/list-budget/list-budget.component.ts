import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-list-budget',
  standalone: true,
  imports: [NzCardModule, NzStatisticModule, NzButtonModule, NzIconModule, NzToolTipModule],
  templateUrl: './list-budget.component.html',
  styleUrl: './list-budget.component.css'
})
export class ListBudgetComponent {

}
