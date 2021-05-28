import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../service/posts.service";
import {Observable} from "rxjs";
import {Response} from "../../models/response";
import {Post} from "../../models/post";
import {PageOptions} from "../../models/pageOptions";

@Component({
  selector: 'app-card-posts-page',
  templateUrl: './card-posts-page.component.html',
  styleUrls: ['./card-posts-page.component.css']
})
export class CardPostsPageComponent implements OnInit {

  constructor(private postsService: PostsService) { }
  public posts$: Observable<Response<Post>>;
  private pageNumber = 1;

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts(this.pageNumber, PageOptions.pageSize);
  }

  previousBtnClick() {
    this.posts$ = this.postsService.getPosts(--this.pageNumber, PageOptions.pageSize);
  }

  nextBtnClick() {
    this.posts$ = this.postsService.getPosts(++this.pageNumber, PageOptions.pageSize);
  }

}
