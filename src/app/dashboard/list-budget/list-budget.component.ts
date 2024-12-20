import { Component, inject, OnInit } from '@angular/core';
import { Expense } from '../../_interfaces/expense';
import { ExpenseService } from '../../_services/expense.service';
import { CardExpenseComponent } from '../card-expense/card-expense.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-budget',
  standalone: true,
  imports: [
    CardExpenseComponent,
    NzTypographyModule,
    NzButtonModule,
    NzGridModule,
    RouterLink,
  ],
  templateUrl: './list-budget.component.html',
  styleUrl: './list-budget.component.css',
})
export class ListBudgetComponent implements OnInit {
  private expenseService = inject(ExpenseService);
  public expenses: Expense[] = [];

  ngOnInit(): void {
    this.expenseService
      .getExpenses()
      .subscribe((expenses) => (this.expenses = expenses));
  }

  loadExpenses() {
    this.expenseService.getExpenses().subscribe((expenses) => {
      this.expenses = expenses;
    });
  }

  onExpenseDeleted(expenseId: string) {
    this.expenses = this.expenses.filter((expense) => expense.id !== expenseId);
  }
}
