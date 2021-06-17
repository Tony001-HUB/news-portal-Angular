import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Response} from "../../models/response";
import {CommentsService} from "../../service/comments.service";
import {Comment} from "../../models/comment";
import {PageOptions} from "../../models/pageOptions";

@Component({
  selector: 'app-comments-of-post',
  templateUrl: './comments-of-post.component.html',
  styleUrls: ['./comments-of-post.component.css']
})
export class CommentsOfPostComponent implements OnInit {

  public comments$: Observable<Response<Comment>>;
  private pageNumber = 1;
  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.comments$ = this.commentsService.getComments(
      'ab8f6fd7-c35c-47be-1151-08d92fddf848',
      this.pageNumber,
      PageOptions.pageSize
    );
  }

}
