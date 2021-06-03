import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {map, mergeAll, switchMap} from 'rxjs/operators';
import {PostsService} from "../../service/posts.service";
import {Observable, pipe} from "rxjs";
import {Response} from "../../models/response";
import {Post} from "../../models/post";
import {Category} from "../../models/category";

@Component({
  selector: 'app-posts-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;
  postCategory$: Observable<Category[]>;

  constructor(private route: ActivatedRoute, private postsService: PostsService){}

  ngOnInit() {
    this.post$ = this.route.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id')),
        map((id: string) => this.postsService.getPostById(id)),
        mergeAll()
    );


    this.postCategory$ = this.route.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id')),
        map((id: string) => this.postsService.getPostCategories(id)),
        mergeAll()
      );
  }

}
