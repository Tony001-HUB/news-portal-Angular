import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../service/categories.service";
import {Observable, pipe} from "rxjs";
import {Category} from "../../models/category";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map, mergeAll} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../service/posts.service";
import {PageOptions} from "../../models/pageOptions";
import {Response} from "../../models/response";

@Component({
  selector: 'app-edit-post-category',
  templateUrl: './edit-post-category.component.html',
  styleUrls: ['./edit-post-category.component.css']
})
export class EditPostCategoryComponent implements OnInit {

  public category$: Observable<Category[]>;
  public allCategory$: Observable<Response<Category>>;
  public formGroup: FormGroup;
  public postId$: Observable<string>;
  private pageNumber = 1;

  constructor(
    private categoriesService: CategoriesService,
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder)
  { }

  ngOnInit(): void {
    this.category$ = this.activatedRoute.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('id')),
      map((id: string) => this.categoriesService.getCategoriesOfPost(id)),
      mergeAll()
    );

    this.postId$ = this.activatedRoute.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('id'))
    );

    this.formGroup = this.formBuilder.group({
      postId: [null, [Validators.required]],
      categoryId: [null, [Validators.required]]
    })

    this.allCategory$ = this.categoriesService.getAllCategories(this.pageNumber, PageOptions.pageSize)
  }

  submit() {
    this.postId$
      .pipe(
        map(postId => this.postsService.postCategoriesOfPost(postId, this.formGroup.value.categoryId)),
        mergeAll()
      ).subscribe();
  }
}
