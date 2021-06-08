import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../service/categories.service";
import {Observable} from "rxjs";
import {Category} from "../../models/category";

@Component({
  selector: 'app-edit-post-category',
  templateUrl: './edit-post-category.component.html',
  styleUrls: ['./edit-post-category.component.css']
})
export class EditPostCategoryComponent implements OnInit {

  public category$: Observable<Category[]>
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.category$ = this.categoriesService.getCategoriesOfPost('ec27535f-f3c6-42ca-b928-2bd75312f836')
  }

}
