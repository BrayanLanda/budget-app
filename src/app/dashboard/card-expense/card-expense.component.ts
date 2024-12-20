import {
  Component,
  inject,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Expense } from '../../_interfaces/expense';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RouterLink } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { DatePipe } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { ExpenseService } from '../../_services/expense.service';

@Component({
  selector: 'app-card-expense',
  standalone: true,
  imports: [
    DatePipe,
    NzModalModule,
    NzDividerModule,
    NzTagModule,
    NzCardModule,
    NzStatisticModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    RouterLink,
  ],
  templateUrl: './card-expense.component.html',
  styleUrl: './card-expense.component.css',
})
export class CardExpenseComponent implements OnInit {
  private modal = inject(NzModalService);
  private expenseService = inject(ExpenseService);

  @Input() public expense!: Expense;

  @Output() public expenseDeleted = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.expense) throw Error('Expense property is requiered');
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: '¿Estás seguro de eliminar este gasto?',
      nzContent: `Se eliminará el gasto de ${this.expense.description} por $${this.expense.amount}`,
      nzOkText: 'Sí, eliminar',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteExpense(),
      nzCancelText: 'No, cancelar',
      nzIconType: 'exclamation-circle',
    });
  }

  private deleteExpense(): void {
    if (!this.expense.id) return;

    this.expenseService.deleteExpenseById(this.expense.id).subscribe({
      next: (wasDeleted) => {
        if (wasDeleted) {
          this.modal.success({
            nzTitle: 'Gasto eliminado',
            nzContent: 'El gasto ha sido eliminado correctamente',
          });
          this.expenseDeleted.emit(this.expense.id);
        } else {
          this.modal.error({
            nzTitle: 'Error',
            nzContent: 'No se pudo eliminar el gasto',
          });
        }
      },
      error: () => {
        this.modal.error({
          nzTitle: 'Error',
          nzContent: 'Ocurrió un error al eliminar el gasto',
        });
      },
    });
  }
}
