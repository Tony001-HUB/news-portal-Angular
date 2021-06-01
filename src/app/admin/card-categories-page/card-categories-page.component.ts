import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../service/categories.service";
import {Observable} from "rxjs";
import {Response} from "../../models/response";
import {Category} from "../../models/category";
import {PageOptions} from "../../models/pageOptions";

@Component({
  selector: 'app-category-page',
  templateUrl: './card-categories-page.component.html',
  styleUrls: ['./card-categories-page.component.css']
})
export class CardCategoriesPageComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
  public category$: Observable<Response<Category>>;
  private pageNumber = 1;

  ngOnInit(): void {
    this.category$ = this.categoriesService.getAllCategories(this.pageNumber, PageOptions.pageSize);
  }

  previousBtnClick() {
    this.category$ = this.categoriesService.getAllCategories(--this.pageNumber, PageOptions.pageSize);
  }

  nextBtnClick() {
    this.category$ = this.categoriesService.getAllCategories(++this.pageNumber, PageOptions.pageSize);
  }

}
