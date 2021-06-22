import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, tap } from 'rxjs/operators';
import {Auth} from "../models/auth";
import jwt_decode from "jwt-decode";
import {Token} from "../models/token";
import {Observable} from "rxjs";
import {JwtOptions} from "../models/jwtOptions";

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {

  private decoded: JwtOptions;
  constructor(private http: HttpClient) { }

  auth(user: Auth): Observable<Token> {
    return this.http.post<Token>(`${environment.authPostUrl}`, user)
      .pipe(
        map(response => response.accessToken),
        tap(this.setToken)
      )
  }

  private setToken(response) {
    if (response) {
      this.decoded = jwt_decode(response);
      const endTokenTimeRent = new Date(new Date().getTime() + this.decoded.nbf);
      localStorage.setItem('jwt-token-end', endTokenTimeRent.toString());
      localStorage.setItem('jwt-token', response);
    } else {
      localStorage.clear();
    }
  }

  get token() {
    const endTokenTimeRent = new Date(localStorage.getItem('jwt-token-end'));
    if (new Date() > endTokenTimeRent)  {
      this.logout();
      return null;
    }
    return localStorage.getItem('jwt-token');
  }

  logout() {
    this.setToken(null);
  }

  isAuthAsAdmin() {
    return !!this.token; //not null - true
  }
}
