import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../../../models/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../../service/categories.service";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input() public category: Category;
  @Output() OnFormSubmit = new EventEmitter();
  public formGroup: FormGroup;
  added = '';

  constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: [this.category.title, [Validators.required, Validators.maxLength(64)]],
      categoryId: [this.category.categoryId]
    })
  }

  submit() {
    this.OnFormSubmit.emit(this.formGroup.value);
    this.formGroup.reset();
    this.added = 'Edit completed';
  }
}
