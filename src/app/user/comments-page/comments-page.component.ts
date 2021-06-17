import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../models/comment";

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {

  @Input() public comments: Comment[];
  constructor() { }

  ngOnInit(): void {
  }

}
