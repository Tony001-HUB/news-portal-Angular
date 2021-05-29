import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../service/posts.service";
import {Observable} from "rxjs";
import {Post} from "../../models/post";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map, mergeAll} from "rxjs/operators";

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post$: Observable<Post>;

  constructor(private route: ActivatedRoute, private postsService: PostsService){}

  ngOnInit(): void {
    this.post$ = this.route.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id')),
        map((id: string) => this.postsService.getPostById(id)),
        mergeAll()
      );
  }

}

