import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../service/categories.service";
import {Category} from "../../models/category";
import { Subscription } from 'rxjs';
import {Response} from "../../models/response";
import { Observable } from 'rxjs';
import { async } from 'rxjs';
import { PageOptions } from 'src/app/models/pageOptions';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {

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
