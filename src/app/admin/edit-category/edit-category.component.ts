import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {CategoriesService} from "../../service/categories.service";
import {map, mergeAll} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import {Category} from "../../models/category";
import {CategoryFormComponent} from "../forms/category-form/category-form.component";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  @Output()
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

  edit($event: Category) {
    this.categoriesService.putCategory($event.categoryId, $event).subscribe();
  }

  delete($event: Category) {
    this.categoriesService.deleteCategory($event.categoryId).subscribe();
  }
}
