import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Category} from "../models/category";
import { Observable } from 'rxjs';
import {Response} from "../models/response";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories(PageNumber: number, PageSize: number): Observable<Response<Category>> {
    return this.http.get<Response<Category>>(`${environment.getCategoriesUrl}?PageNumber=${PageNumber}&PageSize=${PageSize}`);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.getCategoryByIdUrl}/${id}`);
  }

  putCategory(id: string, obj: Category): Observable<void> {
    return this.http.put<void>(`${environment.putCategory}/${id}`, obj);
  }

  getCategoriesOfPost(id: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.getCategoriesOfPostUrl}/${id}/categories`)
  }

  deleteCategory(id: string): Observable<Category> {
    return this.http.delete<Category>(`${environment.deleteCategory}/${id}`)
  }

  postCategory(title: string): Observable<Category> {
    return this.http.post<Category>(`${environment.postCategory}`, {title: title})
  }
}

