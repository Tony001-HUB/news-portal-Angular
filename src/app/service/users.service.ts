import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  postUser(
    userName: string,
    email: string,
    phoneNumber: string,
    password: string): Observable<User> {
    return this.http.post<User>(`${environment.postUser}/Users`, {
      userName: userName,
      email: email,
      phoneNumber: phoneNumber,
      password: password
    })
  }
}
