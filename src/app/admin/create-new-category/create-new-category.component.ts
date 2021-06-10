import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../../models/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../service/categories.service";

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css']
})
export class CreateNewCategoryComponent implements OnInit {

  public formGroup: FormGroup;
  added = '';
  constructor(public formBuilder: FormBuilder, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
     this.formGroup = this.formBuilder.group({
       title: [null, [Validators.required, Validators.maxLength(20)]]
     })
  }

  submit() {
    this.categoriesService.postCategory(this.formGroup.value.title).subscribe();
    this.formGroup.reset();
    this.added = 'Create completed';
  }

}
