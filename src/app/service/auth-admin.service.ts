import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  constructor(private http: HttpClient) { }

  authFireBase(user) {
    return this.http.post(`${environment.authFireBase}`, user)
      .pipe(
        tap(this.setToken)
      )
  }

  private setToken(response) {
    if (response) {
      const endTokenTimeRent = new Date(new Date().getTime() + +response.expiresIn * 1000);
      // текущая дата + миллисекунды от бэка(жизнь токена)
      localStorage.setItem('fb-token-end', endTokenTimeRent.toString());
      localStorage.setItem('fb-token', response.idToken);
    } else {
      localStorage.clear();
    }
  }

  get token() {
    const endTokenTimeRent = new Date(localStorage.getItem('fb-token-end'));
    if (new Date() > endTokenTimeRent)  {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }

  logout() {
    this.setToken(null);
  }

  isAuthAsAdmin() {
    return !!this.token; //not null - true
  }
}
