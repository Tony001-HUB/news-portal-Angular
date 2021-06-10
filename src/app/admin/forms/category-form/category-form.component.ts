import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from "../../../models/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input() public category: Category;
  @Output() OnFormEdit = new EventEmitter();
  @Output() OnFormDelete = new EventEmitter();
  public formGroup: FormGroup;
  added = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: [this.category.title, [Validators.required, Validators.maxLength(64)]],
      categoryId: [this.category.categoryId]
    })
  }

  edit() {
    this.OnFormEdit.emit(this.formGroup.value);
    this.formGroup.reset();
    this.added = 'Edit completed';
  }

  delete() {
    this.OnFormDelete.emit(this.formGroup.value);
    this.formGroup.reset();
    this.added = 'Delete completed';
  }

}
