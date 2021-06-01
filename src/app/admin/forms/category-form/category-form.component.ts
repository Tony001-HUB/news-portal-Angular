import { Component, OnInit } from '@angular/core';
import {map, mergeAll} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../../../models/post";
import {Category} from "../../../models/category";
import {PostsService} from "../../../service/posts.service";
import {CategoriesService} from "../../../service/categories.service";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  post$: Observable<Category>;
  constructor(private route: ActivatedRoute, private сategoryService: CategoriesService) { }

  ngOnInit(): void {
    this.post$ = this.route.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id')),
        map((id: string) => this.сategoryService.getCategoryById(id)),
        mergeAll()
      );

  }

}
