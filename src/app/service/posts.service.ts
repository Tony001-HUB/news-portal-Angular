import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Response} from "../models/response";
import {Category} from "../models/category";
import {environment} from "../../environments/environment";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(pageNumber: number, pageSize: number): Observable<Response<Post>> {
    return this.http.get<Response<Post>>(`${environment.getPostsUrl}?PageNumber=${pageNumber}&PageSize=${pageSize}`);
  }

  getNextPostPage(pageSize: number): Observable<Response<Post>> {
    return this.http.get<Response<Post>>(`${environment.getPostsUrl}?PageNumber=1&PageSize=${pageSize}`);
  }
}
