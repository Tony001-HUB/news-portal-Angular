import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../service/posts.service";
import {Observable} from "rxjs";
import {Response} from "../../models/response";
import {Post} from "../../models/post";
import {PageOptions} from "../../models/pageOptions";
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart-posts-page',
  templateUrl: './card-posts-page.component.html',
  styleUrls: ['./card-posts-page.component.css']
})
export class CardPostsPageComponent implements OnInit {

  constructor(private postsService: PostsService) { }
  public post$: Observable<Response<Post>>;
  pageNumber = 1;

  ngOnInit(): void {
    this.post$ = this.postsService.getPosts(this.pageNumber, PageOptions.pageSize);
  }

  loadMore(currentPageItems: Post[]) {
    const nextPostsPage$: Observable<Response<Post>> = this.postsService.getPosts(++this.pageNumber, PageOptions.pageSize);


    combineLatest([this.post$, nextPostsPage$]).pipe(map(([existingPost, newPosts]) =>
      {

      }
    ))
  }
}
