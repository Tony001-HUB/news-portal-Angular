import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      login: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required,  Validators.minLength(6)]],
    })
  }
  submit() {
    console.log(this.formGroup.value.subscribe());
  }
}
