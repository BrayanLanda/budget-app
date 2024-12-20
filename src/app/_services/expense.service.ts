import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, map, Observable, of } from 'rxjs';
import { Expense } from '../_interfaces/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.baseUrl}/expenses`)
  }

  getExpenseById(id: string): Observable<Expense | undefined> {
    return this.http.get<Expense>(`${this.baseUrl}/expenses/${id}`)
      .pipe(
        catchError(error => of(undefined))
      );
  }

  addExpense( expense: Expense ): Observable<Expense> {
    return this.http.post<Expense>(`${ this.baseUrl }/expenses`, expense );
  }

  updateExpense( expense: Expense ): Observable<Expense> {
    if ( !expense.id ) throw Error('Expense id is required');

    return this.http.patch<Expense>(`${ this.baseUrl }/expenses/${ expense.id }`, expense );
  }

  deleteExpenseById( id: string ): Observable<boolean> {

    return this.http.delete(`${ this.baseUrl }/expenses/${ id }`)
      .pipe(
        map( resp => true ),
        catchError( err => of(false) ),
      );
  }
}
