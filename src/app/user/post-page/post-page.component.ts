import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {PostsService} from "../../service/posts.service";
import {Observable} from "rxjs";
import {Response} from "../../models/response";
import {Post} from "../../models/post";

@Component({
  selector: 'app-posts-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  id = '';

  constructor(private route: ActivatedRoute, private postsService: PostsService){}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.get('id'))
    ).subscribe(data => this.postsService.getPostById(this.id += data));
  }

}
