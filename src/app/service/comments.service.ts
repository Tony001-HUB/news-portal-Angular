import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Response} from "../models/response";
import {Comment} from "../models/comment";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments(idPost: string, pageNumber: number, pageSize: number): Observable<Response<Comment>> {
    return this.http.get<Response<Comment>>(`${environment.getComments}/${idPost}/comments?PageNumber=${pageNumber}&PageSize=${pageSize}`);
  }
}
