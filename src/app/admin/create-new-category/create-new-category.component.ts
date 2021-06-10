import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../../models/category";

@Component({
  selector: 'app-create-new-category',
  templateUrl: './create-new-category.component.html',
  styleUrls: ['./create-new-category.component.css']
})
export class CreateNewCategoryComponent implements OnInit {

  category$: Observable<Category>
  constructor() { }

  ngOnInit(): void {
  }

}
