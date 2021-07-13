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
        map(response => response),
        tap(this.setToken)
      )
  }

  public setToken(response: Token) {
    if (response) {
      this.decoded = jwt_decode(response.accessToken);
      console.log(this.decoded);
      const endTokenTimeRent = new Date(this.decoded.exp * 1000);
      localStorage.setItem('jwt-token-end', endTokenTimeRent.toString());
      localStorage.setItem('jwt-token', response.accessToken);
      localStorage.setItem('refresh-token', response.refreshToken);
    } else {
      localStorage.clear();
    }
  }

  get token() {
    const endTokenTimeRent = new Date(localStorage.getItem('jwt-token-end'));
    if (new Date() > endTokenTimeRent)  {
      this.updatingAuth();
      return null;
    }
    return localStorage.getItem('jwt-token');
  }

  logout() {
    this.setToken(null);
  }

  isAuthAsAdmin() {
    return !!this.token; //not null - true !!this.token
  }

  updatingAuth() {
    const refreshToken = localStorage.getItem('refresh-token');
    this.http.post('https://localhost:44322/Users/refresh-session', {refreshToken: refreshToken}).subscribe( (response: Token) => {
      console.log("Тут: " + response);
      this.setToken(response)
    });
  }
}
