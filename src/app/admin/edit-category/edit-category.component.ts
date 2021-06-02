import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../service/categories.service";
import {map, mergeAll} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import {Category} from "../../models/category";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category$: Observable<Category>;
  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.category$ = this.route.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id')),
        map((id: string) => this.categoriesService.getCategoryById(id)),
        mergeAll()
      );
  }

}
