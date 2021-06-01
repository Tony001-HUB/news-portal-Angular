import { Component, Input, OnInit } from '@angular/core';
import {map, mergeAll} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from "../../../models/post";
import {Category} from "../../../models/category";
import {PostsService} from "../../../service/posts.service";
import {CategoriesService} from "../../../service/categories.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input()
  public category: Category;
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: [this.category.title, [Validators.required, Validators.maxLength(64)]],
      categoryId: [this.category.categoryId]
    })
  }

}
