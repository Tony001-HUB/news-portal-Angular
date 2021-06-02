import { Component, Input, OnInit } from '@angular/core';
import {Category} from "../../../models/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../../service/categories.service";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input()
  public category: Category;
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: [this.category.title, [Validators.required, Validators.maxLength(64)]],
      categoryId: [this.category.categoryId]
    })
  }

  submit() {
    if (this.formGroup.invalid){
      return;
    }

    this.categoriesService.putCategory(this.formGroup.value.categoryId, this.formGroup.value).subscribe();
  }
}
