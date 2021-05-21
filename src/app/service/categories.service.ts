import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Category} from "../models/category";
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import {Response} from "../models/response";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories(PageNumber: number, PageSize: number) {
    return this.http.get(`${environment.getCategoriesUrl}?PageNumber=${PageNumber}&PageSize=${PageSize}`)
      .pipe(map((resp: Response) => {
        return {
          category: resp.currentPageItems
        }
      }));
  }
}
