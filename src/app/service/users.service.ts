import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import { User } from '../models/user';
import {Response} from "../models/response";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  postUser(
    userName: string,
    email: string,
    phoneNumber: string,
    userId: string): Observable<string> {
    return this.http.post(`${environment.postUser}/Users`, {
      userName: userName,
      email: email,
      phoneNumber: phoneNumber,
      userId: userId
    }, {responseType: 'text'});
  }

  getUsers(pageNumber: number, pageSize: number): Observable<Response<User>>{
    return this.http.get<Response<User>>(`${environment.getUsers}PageNumber=${pageNumber}&PageSize=${pageSize}`)
  }

  putUser(id: string, user: User): Observable<void> {
    return this.http.put<void>(`${environment.putUser}/${id}`, user)
  }


}
