import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../service/posts.service";
import {Observable} from "rxjs";
import {Response} from "../../models/response";
import {Post} from "../../models/post";
import {PageOptions} from "../../models/pageOptions";

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
    this.post$ = this.postsService.getAllPosts(this.pageNumber, PageOptions.pageSize);
  }

  loadMore(currentPageItems: Post[]) {
    currentPageItems.length < 20
      ? this.post$ = this.postsService.getAllPosts(this.pageNumber,currentPageItems.length + 5)
      : document.querySelector('.load-more-btn').remove();
        let prevBtn = document.createElement('button');
        let nextBtn = document.createElement('button');

        prevBtn.className = 'waves-effect waves-light btn btn-prev';
        nextBtn.className = 'waves-effect waves-light btn btn-next';
        prevBtn.innerHTML = "<- prev page";
        nextBtn.innerHTML = "next page ->";

        document.querySelector('.prev-next-btn-container').append(prevBtn);
        document.querySelector('.prev-next-btn-container').append(nextBtn);

        document.querySelector('.btn-prev').addEventListener('click', event => {
          currentPageItems.length = 5;
          this.post$ = this.postsService.getAllPosts(--this.pageNumber,currentPageItems.length);
        });
        document.querySelector('.btn-next').addEventListener('click', event => {
          currentPageItems.length = 5;
          this.post$ = this.postsService.getAllPosts(++this.pageNumber,currentPageItems.length);
        });
  }
}
