import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../service/posts.service";
import {Observable} from "rxjs";
import {Post} from "../../models/post";
import {Response} from "../../models/response";
import {PageOptions} from "../../models/pageOptions";

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

}
