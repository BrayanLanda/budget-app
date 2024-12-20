import { Component, inject } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ExpenseService } from '../../_services/expense.service';
import { Router, RouterLink } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Expense } from '../../_interfaces/expense';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-create-expense',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NzGridModule,
    NzSelectModule,
    NzInputNumberModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
  ],
  templateUrl: './create-expense.component.html',
  styleUrl: './create-expense.component.css',
})
export class CreateExpenseComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private expenseService = inject(ExpenseService);
  private message = inject(NzMessageService);

  public isSubmitting = false;

  public categories = [
    'Alimentación',
    'Servicios',
    'Transporte',
    'Ropa',
    'Salud',
    'Otros',
  ];

  public myForm: FormGroup = this.fb.group({
    description: ['', [Validators.required, Validators.minLength(3)]],
    amount: [null, [Validators.required, Validators.min(0)]],
    category: ['', [Validators.required]],
  });

  formatter = (value: number): string => `$ ${value}`;
  parser = (value: string): string => value.replace('$ ', '');

  onSubmit(): void {
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.isSubmitting = true;

    const newExpense: Expense = {
      ...this.myForm.value,
      id: crypto.randomUUID(),
      userId: '1',
      date: new Date().toISOString(),
    };

    this.expenseService.addExpense(newExpense).subscribe({
      next: () => {
        this.message.success('Gasto creado correctamente');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.message.error('Error al crear el gasto');
        this.isSubmitting = false;
      },
    });
  }
}
