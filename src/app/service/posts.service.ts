import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Response} from "../models/response";
import {Category} from "../models/category";
import {environment} from "../../environments/environment";
import {Post} from "../models/post";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(pageNumber: number, pageSize: number): Observable<Response<Post>> {
    return this.http.get<Response<Post>>(`${environment.getPostsUrl}?PageNumber=${pageNumber}&PageSize=${pageSize}`);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.getPostByIdUrl}/${id}`);
  }

  getPostCategories(postId: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.getPostCategory}/${postId}/categories`);
  }
}
