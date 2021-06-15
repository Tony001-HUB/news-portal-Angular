import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import { Role } from '../models/role';
import {Response} from "../models/response";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  getRoles(PageNumber: number, PageSize: number): Observable<Response<Role>> {
    return this.http.get<Response<Role>>(`${environment.getRoles}?PageNumber=${PageNumber}&PageSize=${PageSize}`)
  }

}
