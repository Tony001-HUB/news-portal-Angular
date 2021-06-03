import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../models/post";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post-form-component',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input() public post: Post;
  @Output() OnFormSubmit = new EventEmitter();
  public formGroup: FormGroup;
  added = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: [this.post.title, [Validators.required, Validators.maxLength(64)]],
      content: [this.post.content, [Validators.required, Validators.minLength(64)]],
      postId: [this.post.postId]
    })
  }

  submit() {
    this.OnFormSubmit.emit(this.formGroup.value);
    this.formGroup.reset();
    this.added = 'Edit completed';
  }
}
