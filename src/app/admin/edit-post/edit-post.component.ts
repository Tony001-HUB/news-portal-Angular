import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../service/posts.service";
import {Observable} from "rxjs";
import {Post} from "../../models/post";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {map, mergeAll, switchMap} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  elementListWithForm$: Observable<{ list: Array<Element>, form: FormGroup }>;
  post: Post;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private postsService: PostsService){}

  ngOnInit(): void {
    this.route.params.pipe( switchMap( params => {
      return this.postsService.getPostById(params.id);
    })).subscribe(post => {
      this.post = post;
      this.form = new FormGroup({
        postId: new FormControl(this.post.postId, Validators.required),
        content: new FormControl(this.post.content, Validators.required),
        title: new FormControl(this.post.title, Validators.required)
      });
    });
  }

}
