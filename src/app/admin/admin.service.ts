import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  isAdmin: boolean;

  login(): Observable<boolean> {

    return of(true).pipe(
      delay(1000),
      tap(val => this.isAdmin= true)
    );
  }

  logout(): void {
    this.isAdmin = false;
  }
}
