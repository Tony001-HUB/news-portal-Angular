import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../service/posts.service";
import {Observable} from "rxjs";
import {Response} from "../../models/response";
import {Post} from "../../models/post";
import {PageOptions} from "../../models/pageOptions";
import { combineLatest } from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-cart-posts-page',
  templateUrl: './card-posts-page.component.html',
  styleUrls: ['./card-posts-page.component.css']
})
export class CardPostsPageComponent implements OnInit {

  constructor(private postsService: PostsService) { }
  public post$: Observable<Post[]>
  public currentPostsPage$: Observable<Response<Post>>;
  pageNumber = 1;

  ngOnInit(): void {
    this.currentPostsPage$ = this.postsService.getPosts(this.pageNumber, PageOptions.pageSize)
      .pipe(
        shareReplay(1)
      );

    this.post$ = this.currentPostsPage$
      .pipe(
        map(response => response.currentPageItems),
        shareReplay(1)
      );
  }

  loadMore() {
    this.currentPostsPage$ = this.postsService.getPosts(++this.pageNumber, PageOptions.pageSize)
      .pipe(
        shareReplay(1));

    const nextPosts$: Observable<Post[]> = this.currentPostsPage$
      .pipe(
        map(response => response.currentPageItems)
      );

    this.post$ = combineLatest([this.post$, nextPosts$]).pipe(map(([existingPost, newPosts]) =>
      [...existingPost, ...newPosts]
    ))
  }
}
