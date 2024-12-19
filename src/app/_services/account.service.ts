import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../_interfaces/user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = environment.baseUrl;
  currentUser = signal<User | null>(null);

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'login', model).pipe(
      map(user => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    )
  }
  
  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
