import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoriesService} from "../../service/categories.service";
import {PostsService} from "../../service/posts.service";

@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css']
})
export class CreateNewPostComponent implements OnInit {

  public formGroup: FormGroup;
  added = '';
  constructor(public formBuilder: FormBuilder, private postsService: PostsService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(20)]],
      content: [null, [Validators.required, Validators.minLength(20)]],
      userId: [null, [Validators.required]]
    })
  }

  submit() {
    this.postsService.postPost(this.formGroup.value.title, this.formGroup.value.content, this.formGroup.value.userId).subscribe();
    this.formGroup.reset();
    this.added = 'Create completed';
  }


}
