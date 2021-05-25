import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../service/posts.service";
import {PageOptions} from "../../models/pageOptions";
import {Observable} from "rxjs";
import {Response} from "../../models/response";
import {Category} from "../../models/category";
import {Post} from "../../models/post";

@Component({
  selector: 'app-posts-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

}
